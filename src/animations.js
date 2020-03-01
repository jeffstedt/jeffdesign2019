import { TweenMax, TimelineMax, Circ } from "gsap/TweenMax";

export default {
  methods: {
    enterPage(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				x: window.innerWidth/2 * -1.5,
				scale: 0.95,
				transformOrigin: '50% 50%',
        force3D: false,
        z: 0.01,
			})

			tl.to(el, 0.5, {
        transformPerspective:1000,
				x: 0,
				ease: Circ.easeOut
			});

			tl.to(el, 1, {
        transformPerspective:1000,
				scale: 1,
				ease: Circ.easeOut
			});
    },
    
    leavePage(el, done) {
			TweenMax.fromTo(el, 1, {
        transformPerspective:1000,
				autoAlpha: 1,
        x: 0,
        scale: 1,
        force3D: false,
        z: 0.01,
			}, {
        transformPerspective:1000,
        scale: 0.95,
        x: window.innerWidth/2,
				autoAlpha: 0,
				ease: Circ.easeOut,
				onComplete: done
			});
		}
  }
}