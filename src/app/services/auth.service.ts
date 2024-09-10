import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenModel } from '../models/token.model';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenDecode: TokenModel = new TokenModel();

  constructor(private router: Router) {}

  isAuthenticated() {
    // tokenı aldık
    const token: string | null = localStorage.getItem('token');

    if (token) {
      //decode ettik
      const decode: JwtPayload | any = jwtDecode(token);

      // token süresini kontrol edebiliriz.

      const exp = decode.exp;
      const now = new Date().getTime() / 1000;

      // eğer tokenın süresi geçtiyse tokenı sil ve logine yönlendir
      if (now > exp) {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
        return false;
      }
      // tokenı parçalayıp içindeki değerleri modele atıyoruz.

      this.tokenDecode.id =
        decode[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claimsnameidentifier'
        ];
      this.tokenDecode.name =
        decode['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.tokenDecode.email =
        decode[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ];
      this.tokenDecode.userName = decode['UserName'];

      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
