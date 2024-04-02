import {SidenavItem} from './app/layout/sidenav/sidenav-item/sidenav-item.interface';

export const TREE_STRUCTURE: SidenavItem[] = [
    {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 5,
        pathMatchExact: true
    },
    {
        name: 'Report & Notify Breaches',
        icon: 'notifications',
        position: 15,
        subItems: [
            {
                name: 'Find Breach(s)',
                routeOrFunction: '/reporting-and-notification/find/all',
                position: 5,
                accesses: ['find.breaches'],
            },
            {
                name: 'Report Breach',
                routeOrFunction: '/reporting-and-notification/create',
                position: 15,
                accesses: ['report.breach'],
            },
        ]
    },
    {
        name: 'Company Registration',
        icon: 'app_registration',
        position: 20,
        subItems: [
            {
                name: 'New Application',
                routeOrFunction: '/company-registration/apply',
                position: 5,
                accesses: ['register.company']
            },
            // {
            //     name: 'My Application',
            //     routeOrFunction: '/company-registration/update-application',
            //     icon: 'account_circle',
            //     position: 10,
            //     accesses: ['register.company']
            // },
            {
                name: 'Find Registrations ',
                routeOrFunction: '/company-registration/find',
                position: 15,
                accesses: ['find.registration']
            },
            {
                name: 'Pending Tasks ',
                routeOrFunction: '/company-registration/pending-task',
                position: 20,
                accesses: ['pending.registration.task']
            },
            {
                name: 'Renewals',
                routeOrFunction: '/company-registration/renewals',
                position: 10,
                accesses: ['renewals.registration']
            },
            {
                name: 'Cancel Registration',
                routeOrFunction: '/company-registration/cancel-registration',
                position: 25,
                accesses: ['cancel.registration']
            },
           

            
        ]
    },

    {
        name: 'Complaints',
        icon: 'comment_bank',
        position: 10,
        accesses: ['find.complaint', 'create.complaint'],
        subItems: [
            {
                name: 'Find Complaint(s)',
                routeOrFunction: '/complaints/find',
                position: 5,
                navigationPrams: {
                    name: 'Complaints',
                    operationType: 'Find'
                },
                accesses: ['find.complaint']
            },
            {
                name: 'Pending Task(s)',
                routeOrFunction: '/complaints/pending-tasks',
                position: 5,
                navigationPrams: {
                    name: 'Complaints',
                    operationType: 'Find'
                },
                accesses: ['find.complaint']
            },
            {
                name: 'Report Complaint',
                routeOrFunction: '/complaints/report-complaint',
                navigationPrams: {
                    name: 'Report Complaint',
                },
                accesses: ['report.complaint'],
                position: 15
            }
        ]
    },

    {
        name: 'Investigations',
        icon: 'comment_bank',
        position: 25,
        accesses: ['find.investigation'],
        subItems: [
            {
                name: 'Find Investigation(s)',
                routeOrFunction: '/investigations/find',
                position: 5,
                navigationPrams: {
                    name: 'Investigations',
                    operationType: 'Find'
                },
                accesses: ['find.investigation']
            }
            
        ]
    },

    
    // {
    //     name: 'MyAccount',
    //     icon: 'account_circle',
    //     position: 95,
    //     subItems: [
    //         {
    //             name: 'New Application',
    //             routeOrFunction: '/company-registration/apply',
    //             position: 5,
    //             // accesses: ['new.registration']
    //         }
    //         // {
    //         //     name: 'My Applications',
    //         //     routeOrFunction: '/',
    //         //     position: 6,
    //         //     // accesses: ['find.registration']
    //         // },
    //         // {
    //         //     name: 'Complaints',
    //         //     routeOrFunction: '/',
    //         //     position: 7,
    //         //     // accesses: ['find.registration']
    //         // },
    //         // {
    //         //     name: 'Report Data Breach',
    //         //     routeOrFunction: '/',
    //         //     position: 8,
    //         //     // accesses: ['find.registration']
    //         // },
    //         // {
    //         //     name: 'Submit Report',
    //         //     routeOrFunction: '/',
    //         //     position: 9,
    //         //     // accesses: ['find.registration']
    //         // },
    //     ]
    // },
    {
        name: 'Account Management',
        icon: 'admin_panel_settings',
        position: 30,
        subItems: [
            {
                name: 'Security',
                position: 5,
                subItems: [
                    {
                        name: 'System Accesses',
                        routeOrFunction: '/user-administration/security/accesses',
                        position: 5,
                        accesses: ['view.user.accesses']
                    },
                    {
                        name: 'System Roles',
                        routeOrFunction: '/user-administration/security/roles',
                        position: 10,
                        accesses: ['view.user.roles']
                    }
                ]
            },
            {
                name: 'User Management',
                position: 10,
                subItems: [

                    {
                        name: 'Create User Account',
                        routeOrFunction: '/user-administration/users/create',
                        position: 5,
                        accesses: ['create.user.accounts'],
                    },
                    {
                        name: 'User Account',
                        routeOrFunction: '/user-administration/users/all',
                        position: 10,
                        accesses: ['view.user.accounts'],
                    },
                    {
                        name: 'User Groups',
                        routeOrFunction: '/user-administration/users/groups',
                        position: 15,
                        accesses:  ['view.user.groups'],
                    }
                ]
            }
        ]
    },
    {
        name: 'Reference Tables',
        icon: 'list_alt',
        position: 35,
        accesses: ['tt.edit', 'tt.create', 'tt.delete'],
        subItems: [
            {
                name: 'Countries',
                position: 5,
                subItems: [
                    {
                        name: 'Create',
                        routeOrFunction: '/reference-table/create',
                        position: 5,
                        navigationPrams: {
                            name: 'Countries',
                            operationType: 'Create',
                        },
                        accesses: ['tt.edit']
                    },
                    {
                        name: 'View',
                        routeOrFunction: '/reference-table/view',
                        position: 5,
                        navigationPrams: {
                            name: 'Countries',
                            operationType: 'View',
                        },
                        accesses: ['tt.view']
                    }
                ],
            },
            {
                name: 'Oganisation Type',
                position: 5,
                subItems: [
                    {
                        name: 'Create',
                        routeOrFunction: '/reference-table/create',
                        position: 5,
                        navigationPrams: {
                            name: 'OrganisationType',
                            operationType: 'Create',
                        },
                        accesses: ['tt.edit']
                    },
                    {
                        name: 'View',
                        routeOrFunction: '/reference-table/view',
                        position: 5,
                        navigationPrams: {
                            name: 'OrganisationType',
                            operationType: 'View',
                        },
                        accesses: ['tt.view']
                    }
                ],
            },
            {
                name: 'Reasons For Sharing',
                position: 5,
                subItems: [
                    {
                        name: 'Create',
                        routeOrFunction: '/reference-table/create',
                        position: 5,
                        navigationPrams: {
                            name: 'ReasonsForSharing',
                            operationType: 'Create',
                        },
                        accesses: ['tt.edit']
                    },
                    {
                        name: 'View',
                        routeOrFunction: '/reference-table/view',
                        position: 5,
                        navigationPrams: {
                            name: 'ReasonsForSharing',
                            operationType: 'View',
                        },
                        accesses: ['tt.view']
                    }
                ],
            },
            {
                name: 'Sectors',
                position: 5,
                subItems: [
                    {
                        name: 'Create',
                        routeOrFunction: '/reference-table/create',
                        position: 5,
                        navigationPrams: {
                            name: 'Sectors',
                            operationType: 'Create',
                        },
                        accesses: ['tt.edit']
                    },
                    {
                        name: 'View',
                        routeOrFunction: '/reference-table/view',
                        position: 5,
                        navigationPrams: {
                            name: 'Sectors',
                            operationType: 'View',
                        },
                        accesses: ['tt.view']
                    }
                ],
            },
            {
                name: 'Body Type',
                position: 5,
                subItems: [
                    {
                        name: 'Create',
                        routeOrFunction: '/reference-table/create',
                        position: 5,
                        navigationPrams: {
                            name: 'BodyType',
                            operationType: 'Create',
                        },
                        accesses: ['tt.edit']
                    },
                    {
                        name: 'View',
                        routeOrFunction: '/reference-table/view',
                        position: 5,
                        navigationPrams: {
                            name: 'BodyType',
                            operationType: 'View',
                        },
                        accesses: ['tt.view']
                    }
                ],
            },
        ]
    },
    {
        name: 'Compliance Report', // <- New item
        routeOrFunction: '/compliance-and-reports',
        icon: 'add_circle',
        accesses: ['renewals.registration']
    },
    {
        name: 'Find Compliance Reports', // <- New Finding compliance Reports item
        routeOrFunction: '/compliance-and-reports/find-compliance-reports',
        icon: 'list_alt'
    }
];
