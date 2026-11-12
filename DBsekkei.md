-----曲関連-----

games(ゲームごとのデータ)
game_id|game_title|

songs(曲ごとのデータ)
song_id|game_id|song_title|artist|

charts(曲*難易度のデータ)
chart_id|song_id|difficulty|level|notes|max_score

-----ユーザー関連-----

users(基本情報)
user_id|user_name|e-mail|created_at|updated_at|password_hash

scores(結果保存)
score_id|user_id|chart_id|play_mode|raw_score|rate|rank|lamp|judgement_json|played_at