import {Component, OnInit} from '@angular/core';
import {Theme, ThemeService} from '../../../../@fury/services/theme.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'fury-toolbar-theming',
    templateUrl: './toolbar-theming.component.html',
    styleUrls: ['./toolbar-theming.component.scss']
})
export class ToolbarThemingComponent implements OnInit {

    activeTheme$ = this.themeService.activeTheme$;
    themeIcon$ = '';
    themeTooltip = '';
    nextTheme;

    constructor(
        private themeService: ThemeService
    ) {
    }

    ngOnInit(): void {
        this.activeTheme$.forEach(value => {
            if (value === 'fury-default') {
                this.themeIcon$ = 'invert_colors_off';
                this.themeTooltip = 'Turn dark mode';
                this.nextTheme = 'fury-dark';
            } else {
                this.themeIcon$ = 'invert_colors';
                this.themeTooltip = 'Turn light mode';
                this.nextTheme = 'fury-default';
            }
        }).then();
    }

    setActiveTheme(any) {
       this.themeService.setTheme(this.nextTheme);
    }

}
