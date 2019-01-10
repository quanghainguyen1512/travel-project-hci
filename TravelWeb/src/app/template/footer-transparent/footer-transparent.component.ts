import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({selector: 'app-footer-transparent', templateUrl: './footer-transparent.component.html', styleUrls: ['./footer-transparent.component.scss']})
export class FooterTransparentComponent implements OnInit, OnChanges {
    @Input()
    flagAbsolute = '';

    public flag = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        const flagAbsolute: SimpleChange = changes.flagAbsolute;
        console.log('current value: ', flagAbsolute.currentValue);
        if(flagAbsolute.currentValue === 'true') {
            this.flag = true;
        }else {
            this.flag = false;
        }
    }

}
