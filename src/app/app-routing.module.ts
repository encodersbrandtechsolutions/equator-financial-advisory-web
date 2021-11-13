import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Equator Financial Advisory'
    }
  },
  {
    path: 'about-us',
    component: AboutComponent,
    data: {
      pageTitle: 'About Us'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      pageTitle: 'Our Services'
    }
  },
  {
    path: 'team',
    component: TeamComponent,
    data: {
      pageTitle: 'Our Team'
    }
  },
  {
    path: 'certificates',
    component: CertificatesComponent,
    data: {
      pageTitle: 'Our Certificates'
    }
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    data: {
      pageTitle: 'Contact Us'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
