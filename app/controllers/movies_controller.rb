class MoviesController < ApplicationController
    def index
        movies = Movie.all
        render json: movies, status: :ok
    end

    def show
        movie = Movie.find_by(id: params[:id])

        if movie
            render json: movie, status: :ok
        else
            render json: { error: "🎥 Movie Not Found 🎥" }, status: :not_found
        end
    end

    def create
        movie = Movie.create(title: params[:title], quote: params[:quote])

        if movie.valid?
            render json: movie, status: :created
        else
            render json: { errors: movie.errors }, status: :unprocessable_entity
        end
    end
end
