import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RefrigeratorComponent } from './refrigerator.component'

const routes: Routes = [
    {
        path: '',
        component: RefrigeratorComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RefrigeratorRoutingModule { }
