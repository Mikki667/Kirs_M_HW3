const app = Vue.createApp({
    data() {
        return {
            moviesData: [],
            error: null,
            selectedMovie: null,
            loadingMovies: true,
            loadingMovieDetails: false
        }
    },
    created() {
        this.getMovies()
    },
    methods: {
        getMovies() {
            // will be local host/point to laravel api
            fetch("http://127.0.0.1:8000/api/movies")
            .then(res => {
                if(!res.ok) {
                    throw new Error("Failed to fetch the movies");
                }
                return res.json()
            })
            .then(movies => {
                this.moviesData = movies
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingMovies = false;
            })
        },

        getMovie(id) {
            this.loadingMovieDetails = true;
            this.error = null;
            this.selectedMovie = null;

            fetch(`http://127.0.0.1:8000/api/movies/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error("Failed to fetch movie details")
                }
                return res.json();
            })
            .then(movie => {
                //if(!movie.data) {
                    //throw new Error("Sorry we are unable to find the movie you requested.")
                //}

                const movieData = movie

                this.selectedMovie = {
                    title: movieData.title || "Not available",
                    director: movieData.director?.name || "Not available",
                    //description: movieData.description || "Not available",
                    //image_url: movieData.image_url || ""
                }

                this.$nextTick(()=> {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });

                    gsap.from(this.$refs.movieInfoCon, {
                        opacity: 0,
                        y: 20,
                        duration: 2,
                        ease: "power2.out"
                    })
                })
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingMovieDetails = false;
            });
        }
    }
})
.mount("#app");