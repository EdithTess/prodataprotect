export class UserModel {
    id: string;
    createdTimestamp: string;
    username: string;
    enabled: string;
    totp: string;
    emailVerified: string;
    firstName: string;
    lastName: string;
    email: string;
    disableableCredentialTypes: string;
    requiredActions: string;
    notBefore: string;
    access: UserAccessModel[]
}

export class UserAccessModel {
    manageGroupMembership: string;
    view: string;
    mapRoles: string;
    impersonate: string;
    manage: string;
}

export class GroupModel {
    id: string;
    name: string;
    path: string;
    subGroups:GroupModel[]
}

export class UserRoles {
    id: string;
    name: string;
    description: string;
    composite: boolean;
    clientRole: boolean;
    containerId: string
}


export class Roles {
    id: string;
    RoleName: string;
    RoleDescription: string;
}


export class User {
    UserID: string;
    FirstName: string;
    LastName: string;
    Email: string;
}
