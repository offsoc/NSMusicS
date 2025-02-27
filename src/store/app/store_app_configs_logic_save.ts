import {reactive, ref} from "vue";
import {App_Configs} from "@/models/app_Configs/class_App_Configs";
import {store_app_configs_info} from "@/store/app/store_app_configs_info";
import {store_server_user_model} from "@/store/server/store_server_user_model";
import {store_player_audio_logic} from "@/store/player/store_player_audio_logic";
import {Class_Set_System_Configs_Write} from "@/features/system_configs/class_Set_System_Configs_Write";
import {Library_Configs} from "@/models/app_Configs/class_Library_Configs";
import {Player_Configs_of_UI} from "@/models/app_Configs/class_Player_Configs_of_UI";
import {store_player_appearance} from "@/store/player/store_player_appearance";
import {Player_Configs_of_Audio_Info} from "@/models/app_Configs/class_Player_Configs_of_Audio_Info";
import {store_player_audio_info} from "@/store/player/store_player_audio_info";
import {store_view_media_page_logic} from "@/store/view/media/store_view_media_page_logic";
import {store_playlist_list_info} from "@/store/playlist/store_playlist_list_info";
import {store_server_users} from "@/store/server/store_server_users";
import {store_router_data_info} from "@/store/router/store_router_data_info";
import {store_router_history_data_of_media} from "@/store/router/store_router_history_data_of_media"

export const store_app_configs_logic_save = reactive({
    save_system_config_of_App_Configs(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');


        const app_Configs = ref(
            new App_Configs({
                theme: store_app_configs_info.theme_name,
                lang: store_app_configs_info.lang,
                router_name: String(store_router_data_info.router_name),
                app_left_menu_select_activeKey: String(store_app_configs_info.app_left_menu_select_activeKey),
                app_left_menu_collapsed: String(store_app_configs_info.app_left_menu_collapsed),
                model_select: String(store_server_user_model.model_select),
                server_select: String(store_server_user_model.server_select),
                username: String(store_server_user_model.username),
                password: String(store_server_user_model.password),
                play_order: String(store_player_audio_logic.play_order),
                play_volume: String(store_player_audio_logic.play_volume),
                selectd_props_app_sidebar: JSON.stringify(store_app_configs_info.selectd_props_app_sidebar)
            }));
        let system_Configs_Write = new Class_Set_System_Configs_Write()
        system_Configs_Write.system_app_config(
            db,
            app_Configs.value)
        console.log('save config succuessful')
        db.close();db = null;
    },
    save_system_library_config(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');


        const library_Configs = ref(
            new Library_Configs({
                library: String(store_server_user_model.library_path)
            }))
        let system_Configs_Write = new Class_Set_System_Configs_Write()
        system_Configs_Write.system_library_config(
            db,
            library_Configs.value)
        this.save_system_config_of_App_Configs()
        db.close();db = null;
    },
    save_system_config_of_Player_Configs_of_UI(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');


        const player_Configs_of_UI = ref(
            new Player_Configs_of_UI({
                player_collapsed_album: String(store_player_appearance.player_collapsed_album),
                player_collapsed_skin: String(store_player_appearance.player_collapsed_skin),
                player_lyric_fontSize: String(store_player_appearance.player_lyric_fontSize),
                player_lyric_fontWeight: String(store_player_appearance.player_lyric_fontWeight),
                player_lyric_color: String(store_player_appearance.player_lyric_color),
                player_theme_Styles_Selected: String(store_player_appearance.player_theme_Styles_Selected),
                player_background_model_num: String(store_player_appearance.player_background_model_num),
                player_use_lottie_animation: String(store_player_appearance.player_use_lottie_animation),
                player_use_background_filter_blur: String(store_player_appearance.player_use_background_filter_blur),
                player_use_playbar_auto_hide: String(store_player_appearance.player_use_playbar_auto_hide)
            }))
        let system_Configs_Write = new Class_Set_System_Configs_Write()
        system_Configs_Write.system_player_config_of_ui(
            db,
            player_Configs_of_UI.value)
        this.save_system_config_of_App_Configs()
        db.close();db = null;
    },
    save_system_config_of_Player_Configs_of_Audio_Info(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');


        const player_Configs_of_Audio_Info = ref(
            new Player_Configs_of_Audio_Info({
                this_audio_file_path: String(store_player_audio_info.this_audio_file_path),
                this_audio_file_medium_image_url: String(store_player_audio_info.this_audio_file_medium_image_url),
                this_audio_file_lyric: String(store_player_audio_info.this_audio_lyrics_string),
                this_audio_singer_name: String(store_player_audio_info.this_audio_singer_name),
                this_audio_singer_id: String(store_player_audio_info.this_audio_singer_id),
                this_audio_song_name: String(store_player_audio_info.this_audio_song_name),
                this_audio_song_id: String(store_player_audio_info.this_audio_song_id),
                this_audio_song_rating: String(store_player_audio_info.this_audio_song_rating),
                this_audio_song_favorite: String(store_player_audio_info.this_audio_song_favorite),
                this_audio_album_name: String(store_player_audio_info.this_audio_album_name),
                this_audio_album_id: String(store_player_audio_info.this_audio_album_id),
                this_audio_Index_of_absolute_positioning_in_list: String(store_player_audio_info.this_audio_Index_of_absolute_positioning_in_list),
    
                page_top_album_image_url: String(store_player_audio_info.page_top_album_image_url),
                page_top_album_id: String(store_player_audio_info.page_top_album_id),
                page_top_album_name: String(store_player_audio_info.page_top_album_name),
    
                page_songlists_selected: String(store_view_media_page_logic.page_songlists_selected),
    
                player_mode_of_lock_playlist: String(store_player_appearance.player_mode_of_lock_playlist),
                player_mode_of_medialist_from_external_import: String(store_player_appearance.player_mode_of_medialist_from_external_import),
            }));
        let system_Configs_Write = new Class_Set_System_Configs_Write()
        system_Configs_Write.system_player_config_of_audio(
            db,
            player_Configs_of_Audio_Info.value)
        this.save_system_config_of_App_Configs()
        db.close();db = null;
    },
    save_system_playlist_item_id_config(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');

        let system_Configs_Write = new Class_Set_System_Configs_Write();
        system_Configs_Write.system_playlist_item_id_config(
            db,
            store_playlist_list_info.playlist_datas_CurrentPlayList_ALLMediaIds
        )
        this.save_system_config_of_App_Configs()
        db.close();db = null;
    },
    save_system_config_of_View_Router_History(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');


        let system_Configs_Write = new Class_Set_System_Configs_Write();
        system_Configs_Write.system_view_history(
            db,
            store_router_history_data_of_media.router_select_history_date_of_Media,
            [],
            undefined,
            // router_select_history_date_of_Album.value,
            [],
            undefined,
            // router_select_history_date_of_Artist.value,
            [],
        )
        this.save_system_config_of_App_Configs()
        db.close();db = null;
    },
    save_system_config_of_Servers_Config(){
        let db:any = null;
        db = require('better-sqlite3')(store_app_configs_info.nsmusics_db);
        db.pragma('journal_mode = WAL');
        db.exec('PRAGMA foreign_keys = OFF');


        let system_Configs_Write = new Class_Set_System_Configs_Write()
        system_Configs_Write.system_servers_config(
            db,
            store_server_users.server_config_of_all_user_of_sqlite)
        this.save_system_config_of_App_Configs()
        db.close();db = null;
    },
})