import {$RequestMoreInfoField, Checked, Checklist} from './reference.model';

export class WorkFlowConstants {
    public static get REQUEST_MORE_INFO_ACTION(): string {return  'Request For More Information'; }
    public static get TECHNICAL_REVIEW_ACTION(): string {return  'Technical Review'; }
    public static get LEGAL_REVIEW_ACTION(): string {return  'Legal-review'; }
    public static get MAKE_A_COMMENT(): string {return 'Make a Comment';}
}

export class WorkFlowActions {
    StepAccess: boolean;
    Actions: Action[];
}

export class Action {
    ActionID: number;
    ActionName: string;
    ActionIsFinal: string;
    ActionRole: string;
    ActionColor: string;
    ActionIcon: string;

}

export class ActionPerformed {
    WorkFlowID: string;
    RecordTrackingNo: string;
    CurrentStepID: string;
    ActionID: string;
    Comment: string;
    ActionIsFinal: string;
    CheckList: Checked[];
}

export class ActionPerformedRequestMoreInfo {
    RecordTrackingNo: string;
    CurrentStepID: string;
    NextStepID:string;
    ActionID: string;
    Comment: string;
    Email: string;
    Fields: $RequestMoreInfoField[];
}

export class WorkFlowTimeline {
    message: string;
    code: number;
    data: WorkFlowStep[];
}

export class WorkFlowStep {
    StepID: string;
    StepName: string;
    StepOrder: string;
    IsCurrent: boolean;
    ActionsHistory: ActionHistory [];
}

export class ActionHistory {
    ActionID: string;
    ActionName: string;
    ActionRemark: string;
    ActionDate: string;
    PerformedBy: string;
}

export class ActionMakeaComment{
    ComplaintTrackingNo: string;
    Comment: string;
}

