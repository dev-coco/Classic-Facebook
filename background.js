var a=['Mozilla/5.0\x20(Windows\x20NT\x206.1;\x20Win64;\x20x64;\x20rv:55.0)\x20Gecko/20100101\x20Firefox/55.0','chrome','test','mac','linux','Mozilla/5.0\x20(Windows\x20NT\x206.1;\x20Win64;\x20x64;\x20rv:54.0)\x20Gecko/20100101\x20Firefox/54.0','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010.12;\x20rv:54.0)\x20Gecko/20100101\x20Firefox/54.0','undefined','blocking','webRequest','OnBeforeSendHeadersOptions','hasOwnProperty','EXTRA_HEADERS','push','indexOf','requestHeaders','extraHeaders','onBeforeSendHeaders','url','marketplace','adpreferences','/support','secure.facebook','tab=ads_payments','account_billing','groups/create','https://www.facebook.com','https://www.facebook.com/','https://business.facebook.com','http://www.facebook.com/','length','name','toLowerCase','user-agent','value','Referer','http://*.facebook.com/*','https://*.facebook.com/*','sub_frame','script','xmlhttprequest','onBeforeRequest','/settings','fundraisers','match','https://www.facebook.com/home.php?','m.face','split','/timeline','replace','//timeline','www.face','floor','/photo/','/photo?','/home','/profile','.php','creator','business','policies','events','developers','careers','help','content','substring','tabs','forEach'];var b=function(c,d){c=c-0x11f;var e=a[c];return e;};var k=b,userAgent=navigator['userAgent'],default_useragent=k('0x11f'),useragent,savedUserAgent='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64;\x20Trident/7.0;\x20rv:11.0)\x20like\x20Gecko',currTime=0x0;agent=k('0x120');var platform='win';if(/Macintosh/[k('0x121')](userAgent))platform=k('0x122');else/Linux/[k('0x121')](userAgent)&&(platform=k('0x123'));var agents={'chrome':{'win':k('0x124'),'mac':k('0x125')}};useragent=default_useragent;var ClassicFB=0x0,api=typeof chrome!=k('0x126')?chrome:browser;let sendHeadersOptions=[k('0x127'),'requestHeaders'];try{api[k('0x128')][k('0x129')][k('0x12a')](k('0x12b'))&&sendHeadersOptions[k('0x12c')]('extraHeaders');}catch{}function getNameBeforeMark(c){var l=b;if(c[l('0x12d')]('?')>0x0)return c['substring'](0x0,c['indexOf']('?'));else return c;}let appendReferer_extraInfoSpec=[k('0x127'),k('0x12e')];try{if(api[k('0x128')]['OnBeforeSendHeadersOptions'][k('0x12a')]('EXTRA_HEADERS'))appendReferer_extraInfoSpec['push'](k('0x12f'));}catch{}api[k('0x128')][k('0x130')]['addListener'](function setUserAgent(c){var m=b;if(ClassicFB==0x1){var d=/\/plugins\/|\/api\/|\/v3\.2\/|\/dialog\/|\/ajax\/|\/videocall\/|\/rtc\/|\/live\/producer|\/sharer?\.php/;if(d[m('0x121')](c[m('0x131')]))return;if(c[m('0x131')]['indexOf'](m('0x132'))>0x0||c[m('0x131')]['indexOf'](m('0x133'))>0x0||c['url']['indexOf']('tab=security')>0x0||c[m('0x131')][m('0x12d')]('commerce')>0x0||c[m('0x131')]['indexOf'](m('0x134'))>0x0||c[m('0x131')][m('0x12d')](m('0x135'))>0x0||c[m('0x131')]['indexOf'](m('0x136'))>0x0||c[m('0x131')][m('0x12d')](m('0x137'))>0x0||c[m('0x131')][m('0x12d')](m('0x138'))>0x0||c[m('0x131')][m('0x12d')]('.com/pages')>0x0||getNameBeforeMark(c[m('0x131')])==m('0x139')||getNameBeforeMark(c['url'])==m('0x13a')||getNameBeforeMark(c[m('0x131')])=='https://business.facebook.com'||getNameBeforeMark(c['url'])==m('0x13b'))return;var e=m('0x13c'),f,g=!0x1,h;for(var j=0x0;j<c['requestHeaders'][m('0x13d')];++j){h=c[m('0x12e')][j][m('0x13e')][m('0x13f')]();h===m('0x140')&&(c['requestHeaders'][j][m('0x141')]=savedUserAgent,g=!0x0);h==='referer'&&(c['requestHeaders'][j][m('0x141')]=e,f=!0x0);if(f&&g)break;}!f&&c[m('0x12e')]['push']({'name':m('0x142'),'value':e});}return{'requestHeaders':c[m('0x12e')]};},{'urls':[k('0x143'),k('0x144')],'types':['main_frame',k('0x145'),k('0x146'),k('0x147')]},appendReferer_extraInfoSpec),api['webRequest'][k('0x148')]['addListener'](function(c){var n=b;if(ClassicFB==0x1){var d,e=/facebook\.com(\/messages\/|\/messaging\/|\/api\/|\/v3\.2\/|\/ajax\/|\/nw\/|\/data\/|\/webgraphql\/)/;if(e['test'](c[n('0x131')]))return;if(c['url'][n('0x12d')](n('0x149'))>0x0||c[n('0x131')][n('0x12d')]('/support')>0x0||c[n('0x131')]['indexOf'](n('0x135'))>0x0||c[n('0x131')][n('0x12d')](n('0x136'))>0x0||c[n('0x131')][n('0x12d')](n('0x137'))>0x0||c[n('0x131')][n('0x12d')]('/friends')>0x0||c[n('0x131')][n('0x12d')](n('0x14a'))>0x0||c[n('0x131')][n('0x12d')](n('0x138'))>0x0)return;else{if(c[n('0x131')][n('0x14b')](/www\.facebook\.com\/?$|m\.facebook\.com\/(home\.php\??|(\?_rdr)?)?$/)&&0x1==0x2)return d='https://www.facebook.com/home.php',{'redirectUrl':d};else{if(c[n('0x131')][n('0x14b')](/www\.facebook\.com\/\?/)&&0x1==0x2)return d=n('0x14c')+c[n('0x131')]['split']('?')[0x1],{'redirectUrl':d};else{if(c[n('0x131')][n('0x14b')](/m\.facebook\.com.*(\/\?ref=bookmarks.*?)?/))return d=(c['url']['replace'](n('0x14d'),'www.face')[n('0x14e')](/\?/)[0x0]+n('0x14f'))[n('0x150')](n('0x151'),'/timeline'),{'redirectUrl':d};else{if(c[n('0x131')][n('0x14b')](/m\.facebook\.com.*(\/\?ref=settings.*?)?/))return d=(c[n('0x131')][n('0x150')](n('0x14d'),n('0x152'))[n('0x14e')](/\?/)[0x0]+n('0x14f'))[n('0x150')]('//timeline','/timeline'),{'redirectUrl':d};else{if(c[n('0x131')]['match'](/m\.facebook\.com\/(home\.php\??|(\?_rdr)?)?$/)&&parseInt(Math[n('0x153')](Date['now']()/0x3e8))>currTime+0x5&&0x1==0x2)return currTime=parseInt(Math[n('0x153')](Date['now']()/0x3e8)),d='https://www.facebook.com/home.php',{'redirectUrl':d};else{if(c['url']&&c[n('0x131')][n('0x12d')]('timeline')==-0x1&&c[n('0x131')][n('0x12d')]('/commerce')==-0x1&&c[n('0x131')]['indexOf'](n('0x154'))==-0x1&&c['url'][n('0x12d')](n('0x155'))==-0x1&&c['url']['indexOf'](n('0x156'))==-0x1&&c[n('0x131')][n('0x12d')]('/?')==-0x1&&c['url'][n('0x12d')](n('0x157'))==-0x1&&c['url'][n('0x12d')](n('0x158'))==-0x1&&c[n('0x131')][n('0x12d')](n('0x159'))==-0x1&&c[n('0x131')][n('0x12d')](n('0x15a'))==-0x1&&c['url'][n('0x12d')](n('0x15b'))==-0x1&&c[n('0x131')][n('0x12d')](n('0x15c'))==-0x1&&c[n('0x131')][n('0x12d')](n('0x15d'))==-0x1&&c[n('0x131')][n('0x12d')](n('0x15e'))==-0x1&&c['url'][n('0x12d')](n('0x15f'))==-0x1&&c[n('0x131')][n('0x12d')](n('0x160'))==-0x1&&c[n('0x131')]['length']>0x1a&&c[n('0x131')][n('0x14b')](/\//gi)[n('0x13d')]==0x3){var f='',g='';if(c[n('0x131')][n('0x12d')]('?')>-0x1)f=c['url'][n('0x161')](0x0,c[n('0x131')][n('0x12d')]('?')),g=c[n('0x131')][n('0x161')](c[n('0x131')]['indexOf']('?'));else f=c[n('0x131')];return d=f+n('0x14f')+g,{'redirectUrl':d};}else return;}}}}}}}},{'urls':[k('0x143'),k('0x144')],'types':['main_frame',k('0x145'),k('0x146'),k('0x147')]},[k('0x127')]);function reloadFbTabs(){var o=b;api[o('0x162')]['query']({'url':o('0x144')},function(c){var p=b;c[p('0x163')](d=>{try{api['tabs']['reload'](d['id']);}catch{}});});}function getStatus(){return ClassicFB;}function getsavedUserAgent(){return savedUserAgent;}function setsavedUserAgent(c){savedUserAgent=c;}function enable2(){ClassicFB=0x1;}function disable(){ClassicFB=0x0;}
