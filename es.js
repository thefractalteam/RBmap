const operational = "data:image/png;base64,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";
const off = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfoDAcEKguRVFuLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTEyLTA3VDA0OjQyOjAwKzAwOjAwyIL5GQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0xMi0wN1QwNDo0MjowMCswMDowMLnfQaUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMTItMDdUMDQ6NDI6MTErMDA6MDCEF2tQAAAAMHRFWHRDb21tZW50AFBORyBlZGl0ZWQgd2l0aCBodHRwczovL2V6Z2lmLmNvbS9yZXNpemVYm6NrAAAAEnRFWHRTb2Z0d2FyZQBlemdpZi5jb22gw7NYAAAJ/UlEQVRYw72XW4xd11mAv3+tfT37nDlnZuzxbRw7ThyS1G4oDy2oOL2IJKpaUqSCQBXQB4SIQOUS8dBGraqQKCl9qICSABIUhARIiYSo4lqKSFOCUtFGidMLpJlc7LE9tseey5lzP2fvtdbPw4zdxJe04oFf2tJaL/+3v/9fa6+1hXeIF774d+iFi6S9HmcOH2awZw+5U3oo3+if5e9/65McvePDyeoN8/HqXCseNaaiYVHko4kL1UbvoohUf/m3X7oqr7x1cvR3v0D1g+Nk+w9ijVDkdaI0431/9hme/fN/mVrdu3dX0h8e6HY6N1547Xvzpa/myuC3eZHmJDJZKZI6oQjKMFL57aDhxcceuxoaPfEb93Ho8K+w+D9PUQ4HRDfdTty+YExzdlqU/ercT//XHzz63te2b79j4NnX2rZr2uWNdHX5BNVkgNeA84oGBQIBxVrrrUS7RPWaFYxUA3tueQ+nXnlqXlQPi7pDbnrHezSOb6PI90X15rSv5bSThLI/oCEJRgWMZeIcYsxWyRQDREHJ6wXWhVSNXAdaOl549RsMhuXvDZrTf5wVRZQWObZVZyxCVC9wwTObWDrxGCkcWWJpzRjwJaoGdQpOUQQflMloYCVoXUV46KEv8PnPP/h26M898VW+NZ8QpsN/u9u2mca+OhlDKukSxl2mWp5azXP6bIcoKNKrIyJMJ+c5+C6HCCxf9HhvqBxEkSVJEs6cz2aSeMwTT69cbfrib36a7swyOq0L+3Yvdm2Utro9JaVkvN5hMjIUtYTBWkwvazK7fZYgOSGb4mJnCSHQ7g5JE8H5EtWSZmERkZk86nLP+w/xg+ePvh36iX/8Ck9+9lMYkYXeU+de7nTLDw16Y4wRJIlZBmITE973YbrzNyM6SxZnlPYMi2+MoBwTTIMgwmxng3Q8ZkAgm46a731plaN33nSVqQHQR25m49sXepwKz2wsXGR9eYNub8LIW6qkgQsRLVGmIqV2/iyNxRPMrq1R6/XIen1iNcQ2wdiUfjHFcqNFO05aD9x/rzhzjYUEkH3w+4gt0Ngcr4md5EWR3vChD5Afvp18ukn1ygLu9TP0kxprxQyyYxdVOYVZXaQa9jE+EA0GjDUQlSWxV1J0ev/iOFZMeU3ovc89ydGP/RrG2jfN/uZqOje959ZfvpOqXsdYS9Vfo/PdH9Jvr+ODpbF4Enod7KkFeuM+SS2hcBPSzGAz8JmwmM3tWFova+rDtaEAcsgSiTk3Luqv09Q9692vM1ffzkY3I8xU6AcS9tgRb65PWCyWELvG/qxkKrWEurB7T4Oz7TErQ48PSrcX5uqjahrDxnWhJ9yI767fMtiZdZ7OT65/MHYdIOPs0ilsNSFKLMP+BgcPGqTsc35pyFII2Cij34fBOGftomJWSloToZ7Z2W5L9ppgT14XOhVnHNo5wUjt9eFy5LOVnXZwZh/Z8lnyE0vcmBdQdljaGDGM51mpdpJvtHGlMvTC+bMCOoVJlLORUlmTOV/uQJXP3f8AD3/5kauhn3r0n/nqX9yHjWKLjVV6i/T+/TRpsNQxMCjZVlk6oyEbnRUWOmsccYG0GjPCI9ZCHEEcoXFEmaa2PTM1E00cjXcduLYpQD61C2Nqz+bmzDfX93Xvqs8mxCcS1i6M6QfDAM+61pie3c7drWmaxtJfOUM0HpI4R+wD0cgRDUsmSUVVy7fNXmyzeNP89aFpyzD5t+Or6ZnusX7h7uruV+wuw0RHDE+MGa8pYcc85cHD7LrxZlZC4OJiQdVvY0LAekfsHJGrMOoZZslMIRMSia4PPf9X32Pu5kB6W/798lx/KC9PaoM5R+OOjFvvnOXCy33C6gC78SJ72h1Mq8mJ4gzdep/WtjrdScBXHpUABGTst9//1w/K5372a2874+xbJ8fefIV7fuEQw9wMnOUX06zaYTLDqILV/phhwzD17oL0Bk8328DMGVY2TuPLNvOtkva5Nr47IptMMO0h1UiW9afOPdnQvn/hO9++tinArudydo/ztdd2DF4d9MrD4+EAjDBRjzQca7cG0lsKqqQirLzBbXtTzp6csLwwJBkZUi/0OwlllbCaZDPWL2VLy35y3fICtJopS/a8L6S5aE1GRgDnkSjD95XquCdarpi+qcmo8Ez9TM4bUYd2AvWmYTSxLKfbmLgMPMUBN0mvu08vL6bBAFufojJySiJLnMRQgrEWK4KYjKxbY/5UizizrC1sMG6PiAyQBfJI2ekuknrBOi27aeR+LPT5vS0OnF0hhHCe2HjS2FoBQYiMIY0SammKKvhBhQ6h0UkwkcEOLEYMM0xADJWVzKPJlYyrDp4//KfHqXlDrZLhzmzKz041ybOcIsmoRSmZjbFRBGJQEcQaksiSGEtsDNYIRgyIIFBEqrm94oJ2lSlAPc3wkadRq6k3ihDhnMc5B6qYKAJrEUCsRYwgIqCbd9qAoigoNeO1fuX17JrQVrNB8D6P8zTqlhOCFdIkw1QOV1aoNagVVAWM2SrYFhhQQFWBkIlGTflJTMvg8Kr5cNA3zlqwliGBtMiwkcWhBFWMsKkmlwZbxEtDlQRlxlxx/b02tKzwwZexzUIjr1knythVqJjND7v3hOBR2bLUTZpgNodcokgMOn2lqbkWNEoi4iT2eZ4zOzPDbLPFVF4QWYtE0dZpEoMIKmx2UDftvehWTyGookG2x1556N5ff2dTzTNc8Jo16prVagTnMGIYTsYMxiPECGHLdtNrE6Jmq9Sqm/0GjIbZfFIRouidTZMkIUrSJK0XBhFMZKnVarTqDfI4QTb10BAulREV2QRvNVV/1Ne5j3/nadLx6Pqm//mZhylKi3VVFOc18c5v7ksgNpZ6rWDoKoJzqOrl7unlRy+vXlVFJcx98aOfiDNXVtc1VVWmG02KVnNn8EG8gBNQY8BasjwnixOCBoJuQvxWTzUEVDdzhLDVYw1ztiozF370NbwKapKYuAoEI6+W3j/tQljzzuG9RwVMmlIUdUQMQWQLLJuwrZf2CIpMHLLgkGe8D1Xw4TLj6oXkAl+25/idsPvYm9Xom7M2uT0O4SMx4aNB9d1RmtTSqQZJt8NwUuIAFSEYQMzQCwsennNGnymF4ws1e+FA6YO3en3TI48+wJFJSnl6jVgZGZGXdkbJw+uTyUf6ZfVLQ+8f0zhe0Cz1lYATxRn54Sgyj4zi6OPdKLr7/d3+H1nVr4tyfsekCiEoF6rhZca1/1rfEs///p/wUuhyV7yNepJww5/ez2sPPr7nxMnX7zXj8sjYlXapffFvdqt9to0wEqWnSmqEc+MxX3r+2FU5fyz0Unz2yD386s/fTW88ZHtjmvbpEzwyGZp9aeAr//Ct8Om7DrB9orhhn4de/I93zPUTQ98aj3/yPkSEajgiSiztXhsBHjj2r/+XdP8/8b+MpP4tsOgUGQAAAABJRU5ErkJggg==";
const removed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAxlBMVEVHcEz4BAO0QUfARUiMj5H0BgfkEhT2BQXXICLVIiPwCgn3BQXNMDHsDAzyCgn1BwblExRrpKfpEBHeHx/fFRniFxnkEhPgFxjnDw/fFhjtDw7JJim+RUnwCgrcGx3wCgrpEBHgFxjmDxLrDQ3pERDFOz3bIyLqDQ3VLC2nmZrPMzSyXGDKNzbbIB/qExHaJCXwCgvuCQvARUbjHBzcHBzHOz/mGBjMLi+yamq0W2DGRUi9U1SrkJX+AAD9AAD7AgH8AQD+AAE5t+2CAAAAPXRSTlMA/wQMAutq9S0d5PkTyvT9qgHAyzZ1YFKJQ/AINdVJ4Jdae7LUPKGcWAaWJYeC7HzRuiylZ0jeZRpIYHMRyM7U5QAAAdlJREFUOMvVlGdjqjAUhjkEkFGGYAUszjrq7rDzNsP//6duSERFwe/l4+HJe9abKMof/6y09XARQmnbusSaPdfRkzKJBg3otssx1dDJHuxWKdh2MKbO7Fz0LmkQzKNJ6fAjxXnwxTxxA+ARwsAoKRp+fppQtyCtAHiEEBrelWsMhOSePsuSrJdcDxPoty46NLtMkKwf53llKZh14quRpTYR/4huaOaj0GPg7SqGG+sHsjF4FnrE7xha1RqGBUmZmAv17rXqhcW2qFN+1N7cq3Wr7Y1hX3DhtJ5TlCwEyRE/mGi37JL1Jchg3LvFaU/6ITW4wbBeUn06tsOgH+1qi3wdM2EE2c5HVNeO+catQajngnAIOI1RFamZXeBazDYmgeydsErSdKnQWU8ylDjFOq+zSw6TzuL9QVFHwt25ptEsc8JYhPIKt7mG2i4W7w1L3HzrcycwYDBAhUWoQPd2eg4uI5+XxSjMjs7vdSVJx9b5RjYfft7J7OyGtEJZNUznpysThluKmZOg0jsR5PPCfvR5bH2yma6B2RcvgIJGHuPtLT5fi8jP4nvluen1EuKos5n+zOeHGTW/vrPV2qpa6/L9Lfr3e8qxRFmdVdBu9XVKcfPx+0V/5Zn+D3r5WKMnuECSAAAAAElFTkSuQmCC";
const error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAPFBMVEVHcEzQgWn5XQ3jairxYRbqZh77XAn9Wwf6XQr5Xgz8XAjzYBL5XQvyYRX1XxD3Xg7uYxu5hWF2ss3/WwTGBCdDAAAAE3RSTlMAA6sMQRvo+ta79G/GVI6cLQIB70GaxQAAASxJREFUOMvVlNu2gyAMROV+B23+/1+PwBGDVehafeo8aRyR7Iwsyxdign1i24LXJrzmRi4BQPL5d83uA0WnX3cqG8GGiU9oqPJibIxwyA19q2xGvY46SXAqkmdjsMho+QRN0zOiikZllYsHRKSi0YFzHvQA0auiofu4N2KeEZF/NCY3y3y5lneIGK0tGHYaIZFnNJ6hSd4gEv6YCDbW9e9Ssxv3VjdxjFJd+1mPJUCKbua6R7SdqSmd8jZLFd/zj/bPVf/iFU3df4zR45EjREGhB8okj+/RXyHwAtaxhTnsPBE5uJYZfrUhQvnPwS41HPUDEUl9XMl7hGM5OLjtitaRhbi+Vg4OQqGXpdHYSy2nqM1/pBypy3buVTYe5NRXD7eNJzpWavElYy0/oj/O+i1KWde/LQAAAABJRU5ErkJggg==";
const neverexisted = "data:image/png;base64,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";
const statecoords = {
	AL: [-86.9023, 32.3182],
	AK: [-150.4936, 64.2008],
	AZ: [-111.0937, 34.0489],
	AR: [-92.3731, 34.7465],
	CA: [-119.4179, 36.7783],
	CO: [-105.7821, 39.5501],
	CT: [-72.6959, 41.6032],
	DE: [-75.5277, 38.9108],
	FL: [-81.5158, 27.6648],
	GA: [-82.9001, 32.1656],
	HI: [-155.5828, 19.8968],
	ID: [-114.7420, 44.0682],
	IL: [-89.3985, 40.6331],
	IN: [-86.1349, 40.2672],
	IA: [-93.0977, 41.8780],
	KS: [-98.4842, 39.0119],
	KY: [-84.2700, 37.8393],
	LA: [-91.9623, 30.9843],
	ME: [-69.4455, 45.2538],
	MD: [-76.6413, 39.0458],
	MA: [-71.3824, 42.4072],
	MI: [-85.6024, 44.3148],
	MN: [-94.6859, 46.7296],
	MS: [-89.3985, 32.3547],
	MO: [-92.6179, 37.9643],
	MT: [-110.3626, 46.8797],
	NE: [-99.9018, 41.4925],
	NV: [-116.4194, 38.8026],
	NH: [-71.5724, 43.1939],
	NJ: [-74.4057, 40.0583],
	NM: [-105.8701, 34.5199],
	NY: [-74.0060, 40.7128],
	NC: [-79.0193, 35.7596],
	ND: [-101.0020, 47.5515],
	OH: [-82.9071, 40.4173],
	OK: [-97.0929, 35.0078],
	OR: [-120.5542, 43.8041],
	PA: [-77.1945, 41.2033],
	RI: [-71.4774, 41.5801],
	SC: [-81.1637, 33.8361],
	SD: [-99.9018, 43.9695],
	TN: [-86.5804, 35.5175],
	TX: [-99.9018, 31.9686],
	UT: [-111.0937, 39.3200],
	VT: [-72.5778, 44.5588],
	VA: [-78.6569, 37.4316],
	WA: [-120.7401, 47.7511],
	WV: [-80.4549, 38.5976],
	WI: [-89.6165, 43.7844],
	WY: [-107.2903, 43.0759],
};
const button = document.getElementById("openmap");
const statedropdown = document.getElementById("statedropdown");
const topstatedropdown = document.getElementById("topbarstatedropdown");
const sortdropdown = document.getElementById("sort");
const container = document.getElementById("start-screen");
const credits = document.getElementById("credits");
const topbar = document.getElementById("topbar");
const mapelement = document.getElementById("map");
button.addEventListener("click", async () => {
	const state = statedropdown.value;
	if (!state) {
		alert("¡for favor seleccione un estado!");
		return;
	}
	const center = statecoords[state];
	topstatedropdown.value = state;
	credits.style.display = "none";
	topbar.style.top = "0";
	container.innerHTML = "<p class=\"inter italic text-2xl text-gray-100\">preparante...</p>";
	mapelement.style.display = "block";
	maptilersdk.config.apiKey = "MD47r9kN2owa1tUJVi75"; // No soy tonto, no. Esta *es* una clave API, pero es inútil. Simplemente indica de qué cuenta tomar el estilo. En este caso, es mi cuenta y está tomando mi estilo de mapa rojo. (yes, I even translated this comment, curious explorer.)
	const map = new maptilersdk.Map({
		container: "map",
		language: maptilersdk.Language.SPANISH,
		style: "07057984-0fd3-4bd1-b75a-db9429c38bf0",
		center: center,
		zoom: 6,
	});
	topstatedropdown.addEventListener('change', (event) => {
		const selectedstate = event.target.value;
		const coords = statecoords[selectedstate];
		if (coords) {
			map.setCenter(coords);
		}
	});
	sortdropdown.addEventListener('change', (event) => {});
	const api = `https://findaredbox.kbots.tech/search`;
	const coords = "https://redboxlocator.com/coordinates.json";
	try {
		const [apiresponse, coordsjson] = await Promise.all([
			fetch(`https://corsproxy.io/?url=${encodeURIComponent(api)}`),
			fetch(coords)
		]);
		const allboxes = await apiresponse.json();
		const boxcoords = await coordsjson.json();
		const markers = new Map();
		map.addSource('all', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('withnotes', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.notes).map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('removed', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.status == "Removed").map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('operational', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.status == "Operational").map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('error', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.status == "Error (See notes for error code)").map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('off', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.status == "Turned Off").map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('neverexisted', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.status == "Never Existed").map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		map.addSource('notop', {
			type: 'geojson',
			data: {
				type: "FeatureCollection",
				features: allboxes.filter(store => store.status !== "Operational").map(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords ? {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [storecoords.lon, storecoords.lat]
						},
						properties: {}
					} : null;
				}).filter(Boolean)
			}
		});
		const alllayer = map.addLayer({
			id: 'all',
			type: 'circle',
			source: 'all',
			paint: {
				'circle-radius': 3,
				'circle-color': '#E60000',
			}
		});
		const noteslayer = map.addLayer({
			id: 'withnotes',
			type: 'circle',
			source: 'withnotes',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const oplayer = map.addLayer({
			id: 'operational',
			type: 'circle',
			source: 'operational',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const notopredlayer = map.addLayer({
			id: 'notopred',
			type: 'circle',
			source: 'notop',
			paint: {
				'circle-radius': 4,
				'circle-color': '#E60000',
			}
		});
		const notoplayer = map.addLayer({
			id: 'notop',
			type: 'circle',
			source: 'notop',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const rmlayer = map.addLayer({
			id: 'removed',
			type: 'circle',
			source: 'removed',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const errlayer = map.addLayer({
			id: 'error',
			type: 'circle',
			source: 'error',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const offlayer = map.addLayer({
			id: 'off',
			type: 'circle',
			source: 'off',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const nelayer = map.addLayer({
			id: 'neverexisted',
			type: 'circle',
			source: 'neverexisted',
			paint: {
				'circle-radius': 4,
				'circle-color': '#6ce000',
			}
		});
		const layers = ["withnotes", "operational", "removed", "error", "off", "neverexisted", "all", "notopred", "notop"];
		layers.forEach(layer => {
			map.setLayoutProperty(layer, 'visibility', 'none');
		});
		map.setLayoutProperty('all', 'visibility', 'visible');
		sortdropdown.addEventListener('change', (event) => {
			const value = event.target.value;
			layers.forEach(layer => {
				map.setLayoutProperty(layer, 'visibility', 'none');
			});
			switch (value) {
				case "op":
					map.setLayoutProperty('operational', 'visibility', 'visible');
					break;
				case "np":
					map.setLayoutProperty('notop', 'visibility', 'visible');
					break;
				case "rm":
					map.setLayoutProperty('removed', 'visibility', 'visible');
					break;
				case "err":
					map.setLayoutProperty('error', 'visibility', 'visible');
					break;
				case "off":
					map.setLayoutProperty('off', 'visibility', 'visible');
					break;
				case "no":
					map.setLayoutProperty('withnotes', 'visibility', 'visible');
					break;
				case "ne":
					map.setLayoutProperty('neverexisted', 'visibility', 'visible');
					break;
				case "dh":
					map.setLayoutProperty('all', 'visibility', 'visible');
					break;
				default:
					break;
			}
		});

		function updatepins() {
			const zoom = map.getZoom();
			if (zoom > 13.5) {
				const bounds = map.getBounds();
				const boxesinrange = allboxes.filter(store => {
					const storecoords = boxcoords.stores[store.id];
					return storecoords && storecoords.lon >= bounds.getWest() && storecoords.lon <= bounds.getEast() && storecoords.lat >= bounds.getSouth() && storecoords.lat <= bounds.getNorth();
				});
				const currentids = new Set(boxesinrange.map(store => store.id));
				markers.forEach((marker, id) => {
					if (!currentids.has(id)) {
						marker.remove();
						markers.delete(id);
					}
				});
				boxesinrange.forEach(store => {
					const id = store.id;
					if (!markers.has(id)) {
						const storecoords = boxcoords.stores[id];
						if (storecoords) {
							var opendate = store.open_date;
							var name = store.banner_name;
							var address = store.address;
							var district = store.market_name;
							var currentstatus = store.status;
							var notes = store.notes;
							if (!opendate) {
								opendate = "(desconocida)";
							} else {
								const dateobj = new Date(store.open_date);
								opendate = dateobj.toLocaleDateString();
							}
							if (!name) {
								name = "(tienda desconocida)";
							}
							if (!district) {
								district = "(centro/distrito desconocido)";
							}
							if (!currentstatus) {
								currentstatus = "(desconocida)";
							}
							if (!notes) {
								notes = "(no hay nota disponible)";
							}
							var el = document.createElement('img');
							if (currentstatus == "Removed") {
								el.src = removed;
							} else if (currentstatus == "Turned Off") {
								el.src = off;
							} else if (currentstatus == "Never Existed") {
								el.src = neverexisted;
							} else {
								el.src = operational;
							}
							const popup = new maptilersdk.Popup({
								offset: 25
							}).setHTML(`<h1 class="text-2xl inter font-extrabold text-black">${name}</h1><h2 class="text-md inter text-gray-700">${address}</h2><p class="text-sm inter text-black">estatus: ${currentstatus}</p><p class="text-sm inter text-black">fecha de apertura: ${opendate}</p><p class="text-sm inter text-black">centro/distrito: ${district}</p><p class="text-sm inter text-black">apuntes:</p><textarea disabled>${notes}</textarea>`)
							const marker = new maptilersdk.Marker({
								element: el
							});
							marker.setLngLat([storecoords.lon, storecoords.lat])
							marker.setPopup(popup)
							marker.addClassName('cursor-pointer');
							marker.addTo(map);
							markers.set(id, marker);
						}
					}
				});
			} else {
				markers.forEach(marker => marker.remove());
				markers.clear();
			}
		}
		map.on('zoom', updatepins);
		map.on('moveend', updatepins);
	} catch (error) {
		console.error("error!", error);
		container.innerHTML = "<p class=\"inter italic text-2xl text-gray-100\">se produjo un error durante la última carga del mapa.</p>";
	}
});