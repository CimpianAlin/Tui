import {EventEmitter} from 'events';
import SELECTORS from './selectors';

// TODO:
// Need to trace root of timeline.
// When navigating to other page (e.g. home timeline -> mentions), URL will be
// changed. But page loading actually doesn't happen and only DOM tree is updated
// because it's SPA built with React.js.

export default class TweetWatcher extends EventEmitter {
    private observer: MutationObserver | null = null;

    constructor() {
        super();
    }

    start(timelineRoot: HTMLDivElement) {
        if (this.observer !== null) {
            console.error('Tui: Already watching tweets:', this.observer);
            return;
        }

        const observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                for (const n of m.addedNodes) {
                    const elem = n as HTMLDivElement;
                    if (!elem.querySelector) {
                        continue;
                    }
                    const tw = elem.querySelector(SELECTORS.tweet) as HTMLElement | null;
                    if (tw === null) {
                        continue;
                    }
                    if (tw.querySelector(SELECTORS.promotionBannar) !== null) {
                        console.log('Tui: Killed promotion tweet', tw);
                        elem.style.display = 'none';
                    }
                    this.emit('added', tw);
                }
            }
        });

        observer.observe(timelineRoot, {
            childList: true,
        });

        this.observer = observer;
    }

    isWatching() {
        return this.observer !== null;
    }
}

