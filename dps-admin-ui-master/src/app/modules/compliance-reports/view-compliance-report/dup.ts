fetchDataFromAPI(reportId: string): void {
    const apiUrl = this.baseAPIUri + 'v1.0' + '/compliance-report/compliance-reports/single/report?compliance_report_id='+reportId;
    this.http.get(apiUrl).subscribe((response: any) => {
      if (response && response.compliance_report) {
        const complianceReport = response.compliance_report;
        
        console.log(complianceReport)
        this.dataSource = new MatTableDataSource([{
          PolicyandProcedure: complianceReport.notice_policy_procedure.PolicyandProcedure,
          ApprovalDate: complianceReport.notice_policy_procedure.ApprovalDate,
          ReviewDate: complianceReport.notice_policy_procedure.ReviewDate,
          NumberOfTrainings: complianceReport.notice_policy_procedure.NumberOfTrainings
        }]);

  
        this.DPODataSource = new MatTableDataSource([{
          name_of_training: complianceReport.dpo_training.name_of_training,
          who_conducted_training: complianceReport.dpo_training.who_conducted_training,
          date_of_training: complianceReport.dpo_training.date_of_training
        }]);
        console.log(this.DPODataSource)

  
        this.StaffDataSource = new MatTableDataSource([{
          department: complianceReport.staff_training.department,
          total_staff_to_be_trained: complianceReport.staff_training.total_staff_to_be_trained,
          number_completed_training: complianceReport.staff_training.number_completed_training
        }]);
  
        this.ThirdPartyDataSource = new MatTableDataSource([{
          example_of_agent: complianceReport.third_party_contractor.example_of_agent,
          number_of_agents: complianceReport.third_party_contractor.number_of_agents,
          NumberOfTrainedAgents: complianceReport.third_party_contractor.NumberOfTrainedAgents
        }]);
        
        this.ComplaintsDataSource = new MatTableDataSource([{
          year_of_complaint: complianceReport.complaints.year_of_complaint,
          status_of_complaint: complianceReport.complaints.status_of_complaint,
          number_of_complaints_received: complianceReport.complaints.number_of_complaints_received
        }]);
        
        this.BreachesDataSource = new MatTableDataSource([{
          year_of_breach: complianceReport.breaches.year_of_breach,
          status_of_breach: complianceReport.breaches.status_of_breach,
          number_of_breaches: complianceReport.breaches.number_of_breaches,
          measures_taken_to_address_gaps: complianceReport.breaches.measures_taken_to_address_gaps,
          number_of_records_lost: complianceReport.breaches.number_of_records_lost,
          frequent_cause_of_breach: complianceReport.breaches.frequent_cause_of_breach
        }]);
        
        this.ImpactDataSource = new MatTableDataSource([{
          data_or_activity: complianceReport.impact_assessment.data_or_activity,
          date_concluded: complianceReport.impact_assessment.date_concluded
        }]);
        
        this.AuditDataSource = new MatTableDataSource([{
          year_of_audit: complianceReport.audits.year_of_audit,
          category_of_audit: complianceReport.audits.category_of_audit,
          number_of_audits: complianceReport.audits.number_of_audits,
          Resolutionstatus: complianceReport.audits.Resolutionstatus,
          Resolutiondetails: complianceReport.audits.Resolutiondetails
        }]);

        this.cdRef.detectChanges();
  
      } else {
        // Handle the case where the response doesn't match the expected structure
        console.error('Invalid API response format.');
      }
    });
  }


  
  fetchMinimalData(): void{

    const api2 = this.baseAPIUri + 'v1.0' + '/org-registration/byorgid/single?OrganizationID=' + this.authenticationService.getOrganisationID();
    this.http.get<any[]>(api2).subscribe(
      (response) => {
        this.orgName = response.map(item => item.OrganisationName);
             
        // Extract OrganisationCategoryNames and join them with commas
        const orgCategoryNames: string[] = response.map((item) =>
          item.OrganisationCategory.map((category) => category.OrganisationCategoryName)
        );
        this.orgCategory = orgCategoryNames.join(', ');
        this.orgRegNo = response.map(item => item.RegTrackingNo);
        this.orgRegDate = response.map(item => item.EnteredOn);
        this.orgMyID = response.map(item => item.OrganisationID);
        //this.orgRenewal = response.map(item => item.OrganisationName);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
 
}
