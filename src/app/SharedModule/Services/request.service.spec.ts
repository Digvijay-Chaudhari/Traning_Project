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


  it('Should save request ',() =>{

    const MockRequestData =
    {
      "requestId": 1001,
      "userId": 101,
      "managerId": 106,
      "purpose": "Demo Purpose",
      "description": "Demo description",
      "estAmount": 5000,
      "advAmount": 2000,
      "requestDate": "2022-07-07T05:36:31.491Z",
      "requestStatus": 0,
      "comments": null,
      "isDeleted": false
    }
    

    requestService.saveRequest(MockRequestData).subscribe(req=>{
      expect(req).toBeTruthy();
      console.log(req.description);
      expect(req.description).toBe("Demo description");
    })
    
    const req = httpTestingController.expectOne('https://localhost:44381/api/RequestDetail');
    expect(req.request.method).toBe('POST');
    req.flush(MockRequestData);
    httpTestingController.verify();

  })
  

  it('Should getRequest By Id ',() =>{

    const MockRequestData = {
      "requestId": 1001,
      "userId": 101,
      "managerId": 106,
      "purpose": "dbdbbbbcb update 121",
      "description": "bbbbzdbdeeeyy",
      "estAmount": 104444,
      "advAmount": 207575,
      "requestDate": "2022-06-17T00:00:00",
      "requestStatus": 2,
      "comments": "sfsagasga eey hw",
      "isDeleted": false,
      "user": null,
      "forwordedRequestDetails": []
    };

    let response:any;

    requestService.getRequestById(1001).subscribe(res=>{
      response = res;
      expect(response).toBeTruthy();
      console.log(response.requestStatus);
      expect(response.requestStatus).toBe(2);
    })

    const req = httpTestingController.expectOne('https://localhost:44381/api/RequestDetail/1001');
       expect(req.request.method).toBe('GET');
       req.flush(MockRequestData);
       httpTestingController.verify();

  })

});
