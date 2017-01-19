const SELECTORS = {
    tweet: 'div._1eF_MiFx[role="row"]',
    notificationCount: '.Fe7ul3Lt.Z_PqXzzk._2DggF3sL._2izplv41',
    scrollUpToNewTweet: '._1olbCNTo',
    tabItems: `._2QuQvRFT._2ZoxDI7c`,
    newTweetButton: '._2tOLusnc._2ZBD52R7',
    newTweetButtonB: 'a._3TEZxQV',
    cancelNewTweet: '.INAWBu0V._3PLvX7RF.Q1vpCyfl',
    sendTweet: '.MmJh82_T._1xFtK706.SpbPGaHr._2Rz0TobF._1pzUva68._2m0B23vv._3f2NsD-H',
    tweetAction: 'button.RQ5ECnGZ._1m0pnxeJ',
    selectionDialogItems: '.MmJh82_T.SpbPGaHr._3vxCixKF._2Rz0TobF._1pzUva68._1qpWiIkN._3f2NsD-H',
    thumbnailImageInTweet: 'a._2YXT0EI-',
    tweetBody: 'div.I8DvYjmD._2HNcekSk',
    tweetText: 'h1._3f2NsD-H',
    thumbnailLinkInTweet: 'div._3hdqTVua._3f2NsD-H a._3kGl_FG7',
    header: 'header._7kIt4uMb',
    notifications: 'svg._20oY9XAa',
    tweetActions: 'div._1t1yuVSm._3_8jWiwP._32ievKrg._3f2NsD-H',
    notificationIndicator: 'span.Fe7ul3Lt.Z_PqXzzk._2DggF3sL._2izplv41',
    newTweetTextarea: 'textarea._2wjpwbis._1YGC8xFq._2RmultvD._1VqMahaT._2Z8UymHS',
    tweetUserIcon: 'a._24RufZsF',
    tweetUserName: 'a.Fe7ul3Lt._1hmq-Mkf.OrIwTY0I._3fg7OHdb._2DggF3sL._25OmqECI',
    tweetTextBody: 'span.Fe7ul3Lt._10YWDZsG._1rTfukg4._2DggF3sL',
    loginIcon: '.MLZaeRvv._1-I0zYji._3FdDVqR1',
    directMessagesThread: '.aPyKj4JW._33HzS5QJ._3f2NsD-H',
    directMessageItem: '.Ic-QqnSg',
    directMessageTextarea: 'textarea._1wPvdOF6',
    directMessageSubmitButton: 'button.MmJh82_T._17Odsi1l',
    searchPageInput: 'input._1Nta5Z3A',
};

type SelectorType = typeof SELECTORS;
export type SelectorKind = keyof SelectorType;
export default SELECTORS;