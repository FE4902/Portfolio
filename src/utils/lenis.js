import Lenis from '@studio-freight/lenis';

const useLenis = () => {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

export default useLenis;
