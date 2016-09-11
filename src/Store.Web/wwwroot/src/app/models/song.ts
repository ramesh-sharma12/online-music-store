    export interface TrackGenre {
        genre_id: string;
        genre_title: string;
        genre_url: string;
    }

    export interface ISong {
        track_id: string;
        track_title: string;
        track_url: string;
        track_image_file: string;
        artist_id: string;
        artist_name: string;
        artist_url: string;
        artist_website: string;
        album_id: string;
        album_title: string;
        album_url: string;
        license_title: string;
        license_url: string;
        track_language_code: string;
        track_duration: string;
        track_number: string;
        track_disc_number: string;
        track_explicit: string;
        track_explicit_notes?: any;
        track_copyright_c: string;
        track_copyright_p: string;
        track_composer: string;
        track_lyricist?: any;
        track_publisher: string;
        track_instrumental: string;
        track_information?: any;
        track_date_recorded?: any;
        track_comments: string;
        track_favorites: string;
        track_listens: string;
        track_interest: string;
        track_bit_rate: string;
        track_date_created: string;
        track_file: string;
        license_image_file: string;
        license_image_file_large: string;
        license_parent_id: string;
        tags: string[];
        track_genres: TrackGenre[];
    }

    export interface ISongDataSet {
        title: string;
        message: string;
        errors: any[];
        total: string;
        total_pages: number;
        page: number;
        limit: number;
        dataset: Array<ISong>;
    }

