import { TestBed } from '@angular/core/testing';

import { DetailCvResolverResolver } from './detail-cv-resolver.resolver';

describe('DetailCvResolverResolver', () => {
  let resolver: DetailCvResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailCvResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
