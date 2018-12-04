import { HtmlCharactersPipe } from './html-characters.pipe';

describe('HtmlCharactersPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlCharactersPipe();
    expect(pipe).toBeTruthy();
  });

  it('be able to transform &, ®, © and \' ', () => {
    const pipe = new HtmlCharactersPipe();

    const encodedString = '&amp &amp &#174; &#174; &#169; &#169; &#8217; &#8217;';
    const expectedDecodedString = '& & ® ® © © \' \'';

    expect(pipe.transform(encodedString)).toBe(expectedDecodedString);
  });
});
