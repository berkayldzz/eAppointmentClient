export class TokenModel {
  id: string = '';
  name: string = '';
  email: string = '';
  userName: string = '';
}

// jwt.io siteinden tokenımızı decode ettik ve orada id,name,email,username alanlarına karşılık decodeları geldi.Bunları karşılayacak bir model oluşturduk.
