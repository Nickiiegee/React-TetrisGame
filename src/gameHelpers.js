export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']) 
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for(let y= 0; y < player.tetromino.length; y += 1) {
        for(let x = 0; x <player.tetromino[y].length; x += 1) {

            // Check if we're on an actual Tetromino cell
            if(player.tetromino[y][x] !== 0) {
                if(
                    // Check if game is inside game box's height (y); don't exceed game area
                    !stage[y + player.pos.y + moveY] || 

                    // Check if tetromino is inside the game box's width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    
                    //Check that cell we're moving to is not set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
}