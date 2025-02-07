 import { TemplateRef, ViewContainerRef } from '@angular/core';
import { DirectivesDirective } from './directives.directive';

 describe('DirectivesDirective', () => {
    it('should create an instance', () => {
      const templateRef = {} as TemplateRef<unknown>;
      const directive = new DirectivesDirective(({} as ViewContainerRef), templateRef);
      expect(directive).toBeTruthy();
    });
 });
