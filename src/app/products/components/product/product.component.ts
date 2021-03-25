import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  OnDestroy 
} from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-route',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, /*DoCheck,*/ OnDestroy {

  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() { 
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  // ngDoCheck() {
  //   console.log('4. ngDoCheck');
  // }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
