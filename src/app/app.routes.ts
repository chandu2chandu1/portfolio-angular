import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
