import { AuthenticationService } from "../../app/authentication/authentication.service";
// import { AuthenticationService } from "src/app/authentication/authentication.service";

export enum FormMode {
    NEW = 'NEW',
    EDIT = 'EDIT',
    VIEW = 'VIEW'
}

export interface FormAccess {
    new: string;
    edit: string;
    view: string;
}

export abstract class DPSBaseFormComponent {

    // mode of the form either New, Edit, or View mode
    private readonly _mode: FormMode;

    // persistent id of of any record of Edit and View mode.
    private readonly _id: string;

    protected constructor(navParams: any, auth: AuthenticationService, access: FormAccess) {

        let hasPermissions = false;

        if (!(navParams.viewOnlyMode) && !navParams.id) {

            this._mode = FormMode.NEW;
        } else {

            this._mode = (navParams.viewOnlyMode) ? FormMode.VIEW : FormMode.EDIT;
            this._id = navParams.id;
        }

        // process the user access
        switch (this.Mode) {

            case FormMode.NEW:
                hasPermissions = auth.hasRole(access.new);
                break;

            case FormMode.EDIT:
                hasPermissions = auth.hasRole(access.edit);
                break;

            case FormMode.VIEW:
                hasPermissions = auth.hasRole(access.view);
                break;

            default:
                // code...
                break;
        }

        // if the user does not have the necessary access
        if (!hasPermissions) {
            throw new Error('Unauthorized navigation request.');
        }
    }

    /**
     * Retrieve the mode of this form
     * @return form mode
     */
    public get Mode(): string {
        return this._mode;
    }

    /**
     * Persistent id of any record to be edited or viewed
     * @return persistent id.
     */
    public get RecordId(): string {
        return this._id;
    }
}
