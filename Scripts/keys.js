var keys = {
    bind: function() {
        $(document).on('keydown', function(event) {
            return keys.handler(event, true);
        });
        $(document).on('keyup', function(event) {
            return keys.handler(event, false);
        });
        
        var touchHandler = function(keyName, status) {
            return function(event) {
                keys[keyName] = status;
                event.preventDefault();
                return false;
            };
        };
        
        $('#btn-up').on('touchstart', touchHandler('up', true)).on('touchend touchcancel', touchHandler('up', false));
        $('#btn-down').on('touchstart', touchHandler('down', true)).on('touchend touchcancel', touchHandler('down', false));
        $('#btn-left').on('touchstart', touchHandler('left', true)).on('touchend touchcancel', touchHandler('left', false));
        $('#btn-right').on('touchstart', touchHandler('right', true)).on('touchend touchcancel', touchHandler('right', false));
        $('#btn-jump').on('touchstart', touchHandler('up', true)).on('touchend touchcancel', touchHandler('up', false));
        $('#btn-fire').on('touchstart', touchHandler('accelerate', true)).on('touchend touchcancel', touchHandler('accelerate', false));
    },
    reset: function() {
        keys.left = false;
        keys.right = false;
        keys.accelerate = false;
        keys.up = false;
        keys.down = false;
    },
    unbind: function() {
        $(document).off('keydown');
        $(document).off('keyup');
        $('.ctrl-btn').off('touchstart touchend touchcancel');
    },
    handler: function(event, status) {
        switch (event.keyCode) {
            case 57392: // CTRL on MAC
            case 17: // CTRL
            case 65: // A
                keys.accelerate = status;
                break;
            case 40: // DOWN ARROW
                keys.down = status;
                break;
            case 39: // RIGHT ARROW
                keys.right = status;
                break;
            case 37: // LEFT ARROW
                keys.left = status;
                break;
            case 32: // SPACEBAR
                keys.up = status;
                break;
            default:
                return true;
        }

        event.preventDefault();
        return false;
    },
    accelerate: false,
    left: false,
    up: false,
    right: false,
    down: false,
};

// Now you can bind the keys using the following line:
keys.bind();
