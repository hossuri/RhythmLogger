-----曲関連-----

games(ゲームごとのデータ)
game_id|game_title|

songs(曲ごとのデータ)
song_id|game_id|song_title|artist|

charts(曲*難易度のデータ)
chart_id|song_id|difficulty|level|notes|max_score

-----ユーザー関連-----

users(基本情報)
user_id|user_name|email|created_at|updated_at|password_hash

results(結果保存)
results_id|user_id|chart_id|play_mode|judgement_json|raw_score|rate|rank|lamp|played_at