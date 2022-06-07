import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RequestService } from './request.service';

fdescribe('RequestService', () => {
  let requestService: RequestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        RequestService
      ]
    });
    requestService = TestBed.inject(RequestService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(requestService).toBeTruthy();
  });

  it('Should get all requests', () => {

    const MockRequestData = [
      {id:2,purpose:"Movie",description:"Movie",approver:"Shubham",estimatedCost:4000,adancedAmount:1000,plannedDate:new Date("2022-03-17"),isApproved:false,isRejected:false,comment:null},
      {id:3,purpose:"Outing",description:"Outing",approver:"Shantanu",estimatedCost:5000,adancedAmount:1000,plannedDate:new Date("2022-04-27"),isApproved:false,isRejected:false,comment:null},
    ];

    let response:any; 

    requestService.getAllRequest().subscribe(res=>{
      response=res;
      expect(response).toEqual(MockRequestData);
    })

    const req = httpTestingController.expectOne('http://localhost:4200/BudgetData');
    expect(req.request.method).toBe('GET');
    req.flush(MockRequestData);
    httpTestingController.verify();
  })

  it('Should save request ',() =>{

    const MockRequestData =
      {purpose:"Movie123",description:"Movie",approver:"Shubham",estimatedCost:4000,adancedAmount:1000,plannedDate:new Date("2022-03-17"),isApproved:false,isRejected:false,comment:null};
    

    requestService.saveRequest(MockRequestData).subscribe(req=>{
      expect(req).toBeTruthy();
      console.log(req.estimatedCost);
      expect(req.estimatedCost).toBe(4000);
    })
    
    const req = httpTestingController.expectOne('http://localhost:4200/BudgetData');
    expect(req.request.method).toBe('POST');
    req.flush(MockRequestData);
    httpTestingController.verify();

  })
  
  it('Should update request ',() =>{

    const MockRequestData =
      {purpose:"MovieUpdated",description:"Movie",approver:"Shubham",estimatedCost:4000,adancedAmount:1000,plannedDate:new Date("2022-03-17"),isApproved:false,isRejected:false,comment:null};
    

    requestService.updateRequest(MockRequestData,2).subscribe(req=>{
      expect(req).toBeTruthy();
      console.log(req.estimatedCost);
      expect(req.estimatedCost).toBe(4000);
    })
    
    const req = httpTestingController.expectOne('http://localhost:4200/BudgetData/2');
    expect(req.request.method).toBe('PUT');
    req.flush(MockRequestData);
    httpTestingController.verify();

  })

});
