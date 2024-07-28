import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective implements OnChanges {

  @Input()

  appDirective = 10;



  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {
    this.updateView();
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateView();
  }
  updateView(){
    this.viewContainer.clear();

    for(let i = 0; i< this.appDirective; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
