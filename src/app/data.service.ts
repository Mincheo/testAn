import { Injectable } from '@angular/core';

export interface Status {
    title: string;
  }
  export interface Reminder{
    id: number;
    shortdescription: string;
    description: string;
    datatime_create: string;
    datatime_execute: string;
    status: Status;
  }
  // "Краткое описание", "Полное описание", "Дата и
  // время создания", "Дата и время выполнения", "Статус".
  const STATUS: Status[] = [
    {title:"Новый"}, 
    {title:"Исполнен"}, 
    {title:"Запланирован"}, 
    {title:"Просрочен"}];


@Injectable({
  providedIn: 'root'
})

export class DataService {
  items:Reminder[];
  status_select: Status[];
  constructor(){
    this.items = [
      {id:1,shortdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate lorem et metus facilisis, non scelerisque orci rutrum. Pellentesque blandit at ipsum vulputate porta.', datatime_create: '2024-03-07T15:00', datatime_execute: '2024-03-08T15:00', status: Object.assign({}, STATUS[0])},
      {id:2,shortdescription: 'Aliquam condimentum magna at risus aliquet tempus in sed velit.', description: 'Aliquam condimentum magna at risus aliquet tempus in sed velit. Proin facilisis maximus dictum. Praesent condimentum nulla aliquet nisi dignissim convallis ut nec mi. In pharetra purus odio, vehicula scelerisque felis auctor sed.', datatime_create: '2023-12-02T17:25', datatime_execute: '2024-03-07T17:58', status: Object.assign({}, STATUS[1])},
      {id:3,shortdescription: 'Aenean id pharetra eros.', description: 'Aenean id pharetra eros. Morbi vehicula sem in suscipit volutpat. Sed fermentum massa augue, non tempor nisi accumsan ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sed ante ipsum.', datatime_create: '2024-04-01T16:22', datatime_execute: '2024-03-02T15:00', status: Object.assign({}, STATUS[0])},
      {id:4,shortdescription: 'Maecenas ipsum nibh, faucibus a ante vitae, tempor lacinia nunc.', description: 'Maecenas ipsum nibh, faucibus a ante vitae, tempor lacinia nunc. Fusce eu erat ut libero porttitor sollicitudin. In eget elementum dui, sit amet imperdiet elit. Praesent vel massa quis enim venenatis hendrerit.', datatime_create: '2024-01-07T15:22', datatime_execute: '2024-01-17T19:09', status: Object.assign({}, STATUS[2])},
      {id:5,shortdescription: 'Morbi tempor urna nulla, a fermentum nunc consequat sed.', description: 'Morbi tempor urna nulla, a fermentum nunc consequat sed. Quisque sagittis placerat lectus vitae facilisis. Mauris suscipit ex vitae tortor pharetra tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', datatime_create: '2024-03-07T11:11', datatime_execute: '2024-03-07T11:12', status: Object.assign({}, STATUS[3])},
    ];
    this.status_select = STATUS;
  }
    
  getItemById(id: number) {
    return this.items.find(item => item.id == id);
    
  }

  updateItem(updatedItem:Reminder) {
    const index = this.items.findIndex(item => item.id == updatedItem.id);
    this.items[index] = updatedItem;
  }
}