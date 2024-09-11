from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_socketio import SocketIO, emit, join_room, leave_room
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

players = {}

@app.route('/')
def index():
    return render_template('gameCode.html')

@app.route('/BingSiteAuth.xml')
def serve_bing_auth_file():
    return send_from_directory('checkVerifications', 'BingSiteAuth.xml')
    
@socketio.on('connect')
def handle_connect():
    player_id = request.sid
    logging.info(f"Connection attempt from monitoring tool detected: " + request.headers.get('User-Agent', ''))

    players[player_id] = {'x': 0, 'y': 0, 'z': 0, 'nickname': 'Player_' + player_id[-4:]}
    emit('connect_player', {'id': player_id}, broadcast=True)
    emit('new_player', {'id': player_id, 'players': players}, broadcast=True)

@socketio.on('disconnect')
def handle_disconnect():
    player_id = request.sid
    if player_id in players:
        del players[player_id]
        emit('remove_player', {'id': player_id}, broadcast=True)

@socketio.on('update_position')
def handle_update_position(data):
    player_id = request.sid
    if player_id in players:
        players[player_id].update(data['position'])
        emit('update_position', {'id': player_id, 'position': data['position']}, broadcast=True)

@socketio.on('update_nickname')
def handle_update_nickname(data):
    player_id = request.sid
    if player_id in players:
        players[player_id]['nickname'] = data['nickname']
        emit('update_nicknames', {'players': players}, broadcast=True, include_self=False)

@socketio.on('resize_cube')
def handle_resize_cube(data):
    player_id = request.sid
    if player_id in players:
      emit('resize_cube', {'id': player_id, 'size': data['size']}, broadcast=True, include_self=False)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=80)
