import Click from "../triggers/Click.js"
import Type from "../triggers/Type.js"
import GuessValueFromId from "../GuessValueFromId.js"
import Remove from "../triggers/Remove.js"
import AutoFormOnlyFirstStep from "./AutoFormOnlyFirstStep.js"


const AutoFormFq = async(page) => {

    await AutoFormOnlyFirstStep(page)

    //Second step
    await Type(page, '[formcontrolname="dateOfBirth"]', GuessValueFromId('dateOfBirth'))
    await Type(page, '[formcontrolname="licenseObtainedAge"]', GuessValueFromId('licenseObtainedAge'))
    await Remove(page, '#cdk-step-content-0-0')
    await Click(page, '[nxsteppernext]')

    //Third step
    await Click(page, 'nx-radio:has(input[id="nx-radio-3-input"])')
    await Type(page, '[formcontrolname="firstName"]', GuessValueFromId('firstName'))
    await Type(page, '[formcontrolname="lastName"]', GuessValueFromId('lastName'))
    await Type(page, '[formcontrolname="phoneNumber"]', GuessValueFromId('phoneNumber'))
    await Type(page, '[formcontrolname="email"]', GuessValueFromId('email'))
    await Click(page, 'nx-circle-toggle:has(input[id="nx-circle-toggle-group-0-button-2-input"])')
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Click(page, '#fq-submit-button')
    
    await page.waitForNavigation()
}

export default AutoFormFq 