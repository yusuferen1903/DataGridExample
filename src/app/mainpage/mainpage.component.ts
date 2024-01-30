import { NgModule, Component, enableProdMode } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { DxDataGridModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  url!: string;

  dataSource: any = {};
  data: any = [{"SosyalMedyaLinki": "deneme/deneme", "SosyalMedyaAdı": "deneme", "Açıklama" : "deneme deneme"},{"SosyalMedyaLinki": "deneme/deneme", "SosyalMedyaAdı": "deneme", "Açıklama" : "deneme deneme"},{"SosyalMedyaLinki": "deneme/deneme", "SosyalMedyaAdı": "deneme", "Açıklama" : "deneme deneme"}]
  constructor(httpClient: HttpClient) {
    const isNotEmpty = (value: any) => (value !== undefined && value !== null && value !== '');

    this.dataSource = new CustomStore({
      key: 'OrderNumber',
      async load(loadOptions: any) {
        const url = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders';

        const paramNames = [
          'skip', 'take', 'requireTotalCount', 'requireGroupCount',
          'sort', 'filter', 'totalSummary', 'group', 'groupSummary',
        ];

        let params = new HttpParams();

        paramNames
          .filter((paramName) => isNotEmpty(loadOptions[paramName]))
          .forEach((paramName) => {
            params = params.set(paramName, JSON.stringify(loadOptions[paramName]));
          });

        try {
          const result: any = await lastValueFrom(httpClient.get(url, { params }));

          return {
            data: result.data,
            totalCount: result.totalCount,
            summary: result.summary,
            groupCount: result.groupCount,
          };
        } catch (err) {
          throw new Error('Data Loading Error');
        }
      },
    });
  }
}
