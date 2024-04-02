import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../@fury/shared/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(
        public snackBar: MatSnackBar
    ) { }

    private successConfig(message: string): MatSnackBarConfig {
        const config = new MatSnackBarConfig();
        config.verticalPosition = 'bottom';
        config.horizontalPosition = 'right';
        config.duration = 20000;
        config.panelClass = ['snackBar-cust'];
        config.data = message;
        return config;
    }
    
    private errorConfig(message: string): MatSnackBarConfig {
        const config = new MatSnackBarConfig();
        config.verticalPosition = 'bottom';
        config.horizontalPosition = 'right';
        config.duration = 20000;
        config.panelClass = ['snackBar-err-cust'];
        config.data = message;
        return config;
    }
    
    private nuetralConfig(message: string): MatSnackBarConfig {
        const config = new MatSnackBarConfig();
        config.verticalPosition = 'bottom';
        config.duration = 10000;
        config.horizontalPosition = 'right';
        config.panelClass = ['snackBar-nuet-cust'];
        config.data = message;
        return config;
    }
    
    public openSnackBar(message: string, type: string): void {
        let config: MatSnackBarConfig<any>;
    
        if (type === 'success') {
          config = this.successConfig(message);
        } else if (type === 'error') {
          config = this.errorConfig(message);
        } else if (type === 'nuetral') {
          config = this.nuetralConfig(message);
        }

        this.snackBar.openFromComponent(SnackbarComponent, config);
    }

    public snackBarAlert(message: string, action: string, config: any) {
        this.snackBar.open(
            message,
            action,
            config
        )
    }
}
