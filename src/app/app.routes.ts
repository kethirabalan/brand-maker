import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { LogoGenerator } from './pages/logo-generator/logo-generator';
import { ListingKit } from './pages/listing-kit/listing-kit';
import { QrCode } from './pages/qr-code/qr-code';
import { FaviconMaker } from './pages/favicon-maker/favicon-maker';
import { Upgrade } from './pages/upgrade/upgrade';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'logo-generator', component: LogoGenerator },
  { path: 'listing-kit', component: ListingKit },
  { path: 'qr-code', component: QrCode },
  { path: 'favicon-maker', component: FaviconMaker },
  { path: 'upgrade', component: Upgrade },
];
