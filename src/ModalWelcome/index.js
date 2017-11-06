import React, { PureComponent } from 'react'
import classnames from 'cmn/lib/classnames'

import './index.css'
import './fonts.css'

import IMAGE_NEXT from './next.png'
import IMAGE_FIND from './s1-Find.png'
import IMAGE_ADD from './s2-Add.png'
import IMAGE_INSTALL from './s3-Install.png'

class ModalWelcome extends PureComponent {
    state = {
        didClick: false
    }
    render() {
        const { didClick } = this.state;
        return (
            <div id="csfxWelcome" className={classnames(didClick && 'full')}>
                <div class="heading xCenter">Welcome</div>
                <br />
                <div class="h2 xCenter">to Foxified Extension Stores.</div>
                <br />
                <div id="frontText" className={classnames(didClick && 'ftDown')}>
                    {/*
                    <a class="frontContext fc1">Install Chrome,</a>
                    <a class="frontContext fc2">Opera,</a>
                    <a class="frontContext fc3">and Edge extensions,</a>
                    <a class="frontContext fc4">right in Firefox.</a>
                     */}
                    <a class="frontContext fc1">Install Chrome</a>
                    <a class="frontContext fc2"> and Opera extenions,</a>
                    <a class="frontContext fc4">right in Firefox.</a>
                </div>
                <div id="devText">Since you're using Firefox Developer Edition, you'll need to make sure that <i>xpinstall.signatures.required</i> is set to <i><b>false</b></i> in <b>about:config</b> before you begin.</div>
                <div id="nightlyText" className={classnames(didClick && 'hidden')}>Since you're using Firefox Nightly, you'll need to make sure that <i>xpinstall.signatures.required </i> is set to <i><b>false</b></i> in <b>about:config</b> before you begin.</div>
                <img id="nxt" src={IMAGE_NEXT} onClick={this.click}/>
                <div id="instructionImg">
                    <img id="inst0" class="instruction" src={IMAGE_FIND} />
                    <img id="inst1" class="instruction" src={IMAGE_ADD} />
                    <img id="inst2" class="instruction" src={IMAGE_INSTALL} />

                    <b>
                        <a class="instText it0">Find an extension.</a>
                        <a class="instText it1">Add it to Firefox.</a>
                        <a class="instText it2">Sign, Download or Install.</a>
                    </b>
                </div>
                <div id="storeLinks">
                    <div><a id="chrome" href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer">Chrome Web Store.</a></div>
                    <div><a id="opera" href="https://addons.opera.com/en/extensions/" target="_blank" rel="noopener noreferrer">Opera Addons Store.</a></div>
                    {/* <div><a id="edge" href="https://www.microsoft.com/en-us/store/collections/edgeextensions/pc" target="_blank" rel="noopener noreferrer">Open the Microsoft Edge Store.</a></div> */}
                </div>
            </div>
        )
    }

    click = () => this.setState(() => ({ didClick:true }))
}

export default ModalWelcome
