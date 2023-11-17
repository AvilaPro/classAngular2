import { CanActivateFn, Router, UrlSegment, UrlTree } from '@angular/router';



export const controlHoraGuard: CanActivateFn = (route, state) => {
  let horaActual = new Date().getHours();
  let direccion:Router = new Router();
  let urlsegment: UrlSegment = new UrlSegment('/padre', {})


  console.log(`la hora actual es: ${horaActual}`);
  if (horaActual>=10 && horaActual<=16) {
    console.log('acceso otorgado porque esta en el horario');
    return true;
  } else {
    console.log('acceso denegado porque esta fuera el horario, vas a padre');
    direccion.navigateByUrl('padre');
    return false;
  }
};

