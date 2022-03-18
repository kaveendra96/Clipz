import { Component, Input, OnInit,ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers : [ModalService] //inject service in component leavel
})
export class ModalComponent implements OnInit {

  @Input() modelID = '';

  constructor(public modal : ModalService, public el:ElementRef) { 
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  modalClose(){
    this.modal.toggleModal(this.modelID);
  }

}
