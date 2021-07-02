import 'intro.js/introjs.css';
import '../style/h3-intro.less';
export default function h3Intro(options: any): {
    addStep(h3Step: any): any;
    start(): any;
    exit(): any;
    onComplete(providedCallback: any): any;
    onSkip(providedCallback: any): any;
    onChange(providedCallback: any): any;
    setOptions(providedCallback: any): any;
    nextStep(providedCallback: any): any;
    goToStep(providedCallback: any): any;
    refresh(providedCallback: any): any;
    addHinit(): any;
};
