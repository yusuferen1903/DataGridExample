import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccDtoList } from '../shared/models/account';

@Component({
  selector: 'app-add-acc-modal',
  templateUrl: './add-acc-modal.component.html',
  styleUrl: './add-acc-modal.component.scss'
})
export class AddAccModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AddAccModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  socialMediaData: AccDtoList[] = [];


  onNoClick(): void {
    this.dialogRef.close();
  }

  public close(value:any) {
    this.dialogRef.close(value);
  }
  save() {
      const newItem = {
        SosyalMedyaLinki: this.data.link,
        SosyalMedyaAdı: this.data.name,
        Açıklama: this.data.description
      };
      this.socialMediaData.push(newItem);
  
      // Veriyi ekledikten sonra inputları sıfırla
      this.data = {
        sosyalMedyaLinki: '',
        sosyalMedyaAdi: '',
        aciklama: ''
      };
    this.close(this.socialMediaData)
  }
}
