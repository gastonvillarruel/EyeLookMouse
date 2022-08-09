const eyelids = document.querySelectorAll('.eyelids');
const eyes = document.querySelectorAll('.pupil-container');
const eyeball = document.querySelectorAll('.eyes')



addEventListener('mousedown', e=>{
	eyelids.forEach(eyelids=>eyelids.style.height='50%');
});

addEventListener('mouseup', e=>{
	eyelids.forEach(eyelids=>eyelids.style.height='0');
});

const evileye = ()=>{
	let g = 255;
	let b = 255;
	return () => {
		g--;
		b--;
		eyeball.forEach(eyes => eyes.style.background = `rgb(255, ${g}, ${b})`);
		console.log(g);
	}
}
setInterval(evileye(), 500)


addEventListener('mousemove', e=>{

	eyes.forEach(eye=>{

		const eyePos = eye.getBoundingClientRect();
			//devuelve un objecto (DOMRect) con datos sobre la posición del elemento relativa a la esquina superior izquierda de la ventana.

		// coordenadas del mouse
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		// coordenadas del ojo
		const eyeX = eyePos.left + (eyePos.width/2);
		const eyeY = eyePos.top + (eyePos.height/2);

		//diferencia entre las anteriores (largo de cada cateto)
		const deltaX = eyeX - mouseX;
		const deltaY = eyeY - mouseY;

		// posición del mouse en radianes (medida de ángulo). Aplicamos el arcotangente del cociente de los catetos para hallar el ángulo.
		const rad = Math.atan2(deltaY, deltaX);
			// atan2(y, x) retorna el ángulo, en radianes, entre el eje positivo X y el punto (en las coordenadas x e y)


		// conversión a grados (deg) por regla de 3, y redondeo
		let deg = Math.round(rad*(180/Math.PI));

		// correción para cuando el ángulo toma un valor negativo
		if (deg<0) deg = deg + 360;

		eye.style.transform = `rotate(${deg}deg)`;

		console.log(eye.firstElementChild.className)
		console.log("eye coord: "+eyeX, eyeY)
		console.log('mouse coord: '+ mouseX, mouseY)
		console.log('delta: '+ deltaX, deltaY)
		console.log('rad: '+ rad, 'deg: ', deg + "°")
	})
})




/*

PI es la relación entre la longitud de la circunferencia y el diámetro. La circunferencia es igual a 3.14 veces el diámetro.

Un Radián es el ángulo central de una circunferencia que abarca un arco de igual longitud que el radio (1rad es aproximadamente igual a 57.3°). 180° = PI rad, 360° = 2PI rad.

Un cateto, es cualquiera de los dos lados menores de un triángulo rectángulo, los que conforman el ángulo recto. El lado de mayor medida se denomina hipotenusa.


*/