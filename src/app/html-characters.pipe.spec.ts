import { HtmlCharactersPipe } from './html-characters.pipe';

describe('HtmlCharactersPipe', () => {

  let pipe;

  beforeEach( () => {
    pipe = new HtmlCharactersPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('be able to transform &, ®, © and \' ', () => {

    const encodedString = '&amp &amp &#174; &#174; &#169; &#169; &#8217; &#8217;';
    const expectedDecodedString = '& & ® ® © © \' \'';

    expect(pipe.transform(encodedString)).toBe(expectedDecodedString);
  });

  it('should not change regular strings', () => {
    const string = 'This string\'s text should not change.';

    expect(pipe.transform(string)).toBe(string);
  }); 
});
