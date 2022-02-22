namespace SpriteKind {
    export const completeenemy = SpriteKind.create()
    export const blast = SpriteKind.create()
    export const bigenemy = SpriteKind.create()
    export const meany = SpriteKind.create()
}
namespace StatusBarKind {
    export const people = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -80)
    projectile3.setKind(SpriteKind.blast)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.blast, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 1000)
    info.changeScoreBy(1)
    music.smallCrash.play()
})
info.onCountdownEnd(function () {
    mySprite2 = sprites.create(img`
        ...................................
        ...................................
        ...................................
        ...................................
        ...................................
        .............99999999..............
        ............9999999999.............
        ............9999999999.............
        ............9999999999.............
        ............9999999999.............
        ............9999999999.............
        ............9999999999.............
        ............9999999999.............
        ............9999999999.............
        ..........7799999999997............
        .......7777799999999997777.........
        ......7777779999999999777777.......
        ......777777999999999977777777.....
        .....7777777999999999977777777.....
        .....77777779999999999777777777....
        .....77777779999999999777777777....
        ....777777777999999997777777777....
        ....777777777799999977777777777....
        ....777777777777777777777777777....
        ....777777777777777777777777777....
        ....777777777777777777777777777....
        .....7777777777777777777777777.....
        .....777777777777777777777777......
        .......77777777777777777777........
        ..........77777777777777...........
        ...................................
        ...................................
        ...................................
        ...................................
        ...................................
        `, SpriteKind.bigenemy)
    mySprite2.follow(mySprite, 20)
    music.wawawawaa.playUntilDone()
    info.player2.setLife(150)
})
statusbars.onStatusReached(StatusBarKind.people, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    game.splash("Yay, you got away unfortunately Earth steal got conquered:| ")
    game.over(true, effects.confetti)
    game.setDialogCursor(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ff18881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfdff888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffdff668ff6888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbffffffffffdfff66ff8888ccccccccccfffccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99fffffffffffffff8888ccccbbbcc8bfffccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999fffffffffffffff888cbbcbe8bbbcbcfffcbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb99966fffffffffffffff8bccb888888bbbffff888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669fffffffffffff6ffbbbb8888888ccffffb88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd6fffffffffff6fffbcb888888888bffffbcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966ffffffffffffffff88888b888888ffff8cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966fffffff6ffffffff88bbdbbebb8fffff8888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd666666fffffff6fff6fffffddddddddeffffff8888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd66666666fffffffffffffbffffddbdbbdffffffd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd9999966666666fffffffffffffbffffdbbbbbfffffffcccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd9999669696666ffffffffffffffffffbbbddbffffffbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d99999666696666fffffffffffffffbbfbdbbbbfffffbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999999996669966966fffffffffffffffbfbdbbbffffffbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966ffffffffffffffffffffffffffffbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666df6ffff8fffffdffffffffffffffbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666ff6fffff8ffffffffffffffffffffbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666f666ffff8ffffffdffffffffffffbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd696666ffffffffff8fffddffffffffffffffbbbbccccccccc88ff88866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669ffffff6ffff8fffffffffffffffffffffffbccbccccc8fff888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669fffffffffffffffffffffffffffffffffffcbcccccccff8f888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd666fffffffffffffffffffffffffffffffffffccccccccccff8f88889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666ffffffffffffffffffffffffffffffffffcbcccccccfffff88886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb66696966666ffffffffffffffffffffffffffffffffffcbcccccfffffff888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb66969666666ffffffffffffffffffeffffffffffffffcccccffffffff8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666ffffffffffffffffffffffffffffffffffffffffffffff8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666fffffffffffffffffffffdfffeffffffffffffffffffbbf8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996ffffffffffffffffffffffdffffffffffffffffffffffffff8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999fffffffffffffffffffffffffffffcfffffffffffffffffff88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccff9ffffffffffffffffffffffffffffffffffffffffffffffffff888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbcccccccffffffffffff66fffffffffffffffddffffffffffffffffffffffff8bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbcccfffffffffff6fffffffffffffffffffffffffffffffffffffffffffffb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccfffffb6666ffffffffffffffffffffffffffffffffffffffffffff8888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbfffff66666688ffffffffffffffffffffffffffffbfffffffffff88888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbfffffb66666688ffffffffffffffffffffffffffffffffffffffffcc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbccffffcc66666686fffffffffffffffffffffffffffffffffffffffffc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc66666666fffffffffffffffffffffffffffffffffffffffffd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc696666666ffffffffffffffffffffffffffffffffffffffffd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668fffffffffffffffffffffffffffffffffffffffbbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbbfffffffffffffff88ffffffffccffffffffffff8bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbffffffffffffff888ffffffffffffffffffffff8bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbfffffffff886888888fffffffffffffffffffff888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666fffff8888886888888fffffffffffffffffffff88888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666fffff8868688888888fffffffffffffffffffff8888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666fffdfb8868888688888fffffffffffffffffffff8889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc669966666fffbb8688888888888ffffffffffffffffffffff88b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888fffffffffffffffffffffff699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb688866888888ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb8886688888fffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888ffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888fffffffffffffffbbffff669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd8888688888888ffffffffffffffbefff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd8888666666888fffffffffffffddfff669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd6868868688888888fffffffffffdfff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888ffffffffffff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888ff6ffffff669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969999666666688888888888888888f11ffff699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699966666688888811888888888fffff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9969996666888818188888888818f6669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    scene.cameraShake(2, 260)
    otherSprite.destroy(effects.smiles, 100)
    music.jumpUp.play()
    info.changeScoreBy(1)
    statusbar2.value += 1
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -80)
    projectile3.setKind(SpriteKind.blast)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.blast, SpriteKind.bigenemy, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    music.bigCrash.play()
    info.player2.changeLifeBy(-1)
    sprite.setKind(SpriteKind.meany)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.disintegrate, 200)
    timer.after(2, function () {
        game.splash("Earth was destroyed because you failed to save and protect it.", ":( all of the people in outer space died! :(")
        game.setDialogCursor(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffdbdd66168bffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbfbd66fff111ffffffb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbbf6fff11f1fffffffbbf99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbbfffffff1ffff1ff1ffffffbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd9fddfb6fbdfffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffdfffffffdbbffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffff9ffdfffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffff9ffffffffffffffffffffffff8fffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffcbbcbfffffcffffffbbfffb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffbccbfffffffffff88888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffff6fbbbbbffffffffff888b88fff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdffffdffdddffffffffffff6ffbbcbfffffffffbcffffcc8ff886f9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd9fffffffffffffffffffffffbffffffffffffc8fff886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffddf9fffffffff6ffffffffffbbdbbebbffffffff88bff8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff9ffdfdddfffffffffffff6fff6ffffdddddddddeffffffff88bffbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff9fff9ddfffffffffffffffffffffbddddddfdffddfffffdffb8ebffbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffbdddddfffffdffffffffff8bbbfff8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff99ff9f9ffffffffffffffbbbdddddfffddffffffffffffc8bfffbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9fffffff8ffffffbbdddffffdfffffffffffffffcc8bbfff88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ff9fff88fff6fbbdddddfffdfffffffffffffbfcc88bffff88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9fff9fff9ffd88ff666bddfffddffdfffffffffffffffccc88bbfff8ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff99ff9ffffffdffff66fbddffdfffffffffffffffffffffccc88bffff866fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffddfffff99ffffffffffffff66fbdddfffffffffffffffffffffffffffffffccc669ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9f6ffffffffffffff6fbddfffdfffffffffffffffffffffffffffbbccf69ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff69fffffffffffff6fddfddffffffffffffffffffffffffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff6ff9ffffff6fffffffffffffffffffffffffffffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffbfffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffff6ffffffffffffffffffffffffffbffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffdfffff9f9fffffffffffff6ffffffffffffffffffffffffffbffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffdfffffff9f9fffffffffffff6f6ffffffffeffffffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffef9f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffccffff9ffffffffffffff6fffffffffffdfffeffffffffffffffffffbbffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffff8f66fff6ffffffddffdbbdffffffffffffffffffffebffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff9999ffff8f6ffffffffffddddbbbbdffcfffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffeffffffffffff99ffffffffffffffffffffddbbbbffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88ff66fffffffffdddddbddfffffffffffffffffffffffffbb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffbb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9dffffffffffffffbfff6888ffffffffffffffffffffffffffffffffffffffffffffffb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9dffffffffffffffff666668ffffffffffffffffffffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffb66666668ffffffffffffffffffffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffbb66666668ffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99ffffffffffffb66666688ffffffffffffffffffffffffffffbffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dffffffffffb66666688ffffffffffffffffffffffffffffffffffffffffccffff69fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dfffffffffff6666668fff6fffffffffffffffffffffffffffffffffffffccffff69fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999fffffffffbf6666666fff6fffffffffffffffffffffffffffffffffffffddffff6ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff969ffffffffff6966666f66f6fff6ffffffffffffffffffffffffffffffffbdfffff6ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff99ffffffffff696bbffffffffff6fffffffffffffffffffffffffffffffbbdffff69ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9999fffffff9666ffbbfffffffffffffffffffffffffccffffffffcffffbcfffff6fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff699fffffff96ffffbbbfffffffffffffffffffffffffffffffffcfffffbccfff69fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9999ffffff6fffffdbbddffffffff6fffffffffffffffffffffffffffffffff669fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9699dfffffffffffffbb6dfffffff6fffffffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9696fffffffffffffdbbd6ff6f6fffffffffffffffffffffffffffffffffd669ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff999effffffffffffffdbbff6ffff6fffffffffffffffffffffffffffff9b69fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff969ccfffff99fffffffbbbf6fffffffffffffffffffffffffffffffffffb6ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff96cffff9ff9ffffffffbbf6ff666fffffffffffffffffffffffffffff699ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff9fffbf99ffffffffffdbb6fff66fffffffffffffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff9f9ffb9ffffffffffffdbbfff66ffffffffffffffffffffffffffff69ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff969ffffffffffffffffddffff66ffffffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff969ff9ff9fff9ffdffddfffff6fffffffffffffffffffbbffff669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff96ffffff99ff9ddddffff6fffffffffffffffffffffffefff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff96fffff99fffffddffff666666ffffffffffffffffddfff669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff969ffff99ffdddfffff686fffffffffffffffffffdfffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff969ffff9ffffffffff686fffffffffffffffffffff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ff9ff9ffffffffff6ffffffffffffff6ffffff669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f9999fffffffffffffffffffffffff11ffff699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96999ffffffffffff11ffffffffff1fff669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999ffffffff1f1fffffffff1ff6669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99611f11f661ff111ffff6116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff991f1111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.over(false, effects.starField)
    })
})
sprites.onOverlap(SpriteKind.meany, SpriteKind.Player, function (sprite, otherSprite) {
    music.knock.play()
    scene.cameraShake(4, 500)
})
info.player2.onLifeZero(function () {
    mySprite2.destroy(effects.disintegrate, 5000)
    scene.cameraShake(8, 2000)
    timer.after(5, function () {
        game.splash("Hooray, Hooray, you saved the planet from the ailens!")
        game.setDialogCursor(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9fffffffffffffffffffffffff99fffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6fffffffffffffffffffffff999999fffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffff9999999fffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866ffffffffffffffffffff99999999fffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669fffffffffffffffffff9999999ffffffffffff99999fffff
            ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869fffffffffffffffffff9999999fffffffffff99999999fff
            fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866fffffffffffffffffff999999ffffffffffff999999999ff
            fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffff99999999fffffffffff999999999ff
            fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffff999999999fffffffffff99999999ff
            ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffff999999999fffffffffff999999999f
            ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffff999999999fffffffffff999999999f
            ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffff999999999fffffffffff999999999f
            ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffff99999999ffffffffffff999999999f
            ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffff99999999ffffffffffff9999999999
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffff9999999999ffffffffff9999999999
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffff9999999999fffffffff99999999999
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffff9999999999fffffffff99999999999
            ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffff9999999999fffffffff99999999999
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9fffffffffffff777999999999ffffffffff99999999999
            ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffff777799999999ffffffffffff9999999999
            ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9fffffffffff77777799999999ffffffffffff999999999
            ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffff777777799999999ffffffffffff999999999
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffff777777799999999fffffffffff9999999999
            ffffffffffffff77ffffffff77ffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886ffffffffff7777777799999999ffffffffff99999999999
            ffffffffffffff77ffffffff77ffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886ffffffffff77777777777999977fffffffff99999999999
            ffffffffffffffff7fffff77fffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffff777777777777777777fffffffffff999999999
            fffffffffffffffff777777ffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffff777777777777777777ffffffffff7999999999
            fffffffffffffffff77777777ffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffff777777777777777777fffffffffff799999997
            ffffffffffffffff777777777ffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffff777777777777777777fffffffffff779999997
            fffffffffffffff77772777777ffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffff777777777777777777ffffffffffff77999777
            fffffffffffffff77777772777ffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffff777777777777777777fffffffffffff7777777
            fffffffffffffff77772777777fffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffff7777777777777777777ffffffffff777777777
            fffffffffffffff77777727777fffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669ffffffffffff77777777777777777777ffffffff777777777
            ffffffffffffffff7777777777fffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869fffffffffffff77777777777777777777ffffffff777777777
            fffffffffffffffffff77777ffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669fffffffffffff7777777777777777777fffffffff777777777
            ffffffffffffffffff777777fffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69ffffffffffffffff7777777777777777ffffffffff777777777
            ffffffffffffffffff777777fffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffff777777777777777fffffffffff77777777
            ffffffffffffffffff7777777fffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffff7777777777777fffffffffff77777777
            ffffffffffffffffff7777777ffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869ffffffffffffffffffffffff77777777777fffffffff777777777
            ffffffffffffffffff77777777fffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869fffffffffffffffffffffffffff7777777777ffffffff777777777
            ffffffffffffffffff7777777777ffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffff777777ffffff7777777777
            ffffffffffffffffff77777777777ffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffff7777777777
            ffffffffffffffffff777777777777ffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffff7777777777
            ffffffffffffffffff7777777fff777ffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669ffffffffffffffffffffffffffffffffffffffffffffffff7777777ff
            ffffffffffffffff77777f7777ffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff7777fff777ffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff7777ffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.over(true, effects.confetti)
    })
})
sprites.onOverlap(SpriteKind.blast, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 9 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 9 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 4 5 5 5 5 . . . . . . 
        . . . . . 4 . . 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 4 4 4 . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . 4 4 4 5 5 5 4 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 4 5 5 5 5 . . . . . . 
        . . . . . 4 . . 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 4 4 4 . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . 4 4 5 5 5 5 4 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 4 . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 . . . . . . 
        5 . 5 5 4 5 5 5 5 5 5 . . . . . 
        5 5 . . . 5 5 5 5 5 5 5 . . . . 
        . 5 5 . 5 5 5 5 5 5 5 5 . 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 . 5 5 5 . . . 
        . 5 . 5 5 5 5 5 4 . 5 . 5 . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 4 5 5 5 5 5 5 5 . . 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 . 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 . 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 . 5 5 . . 5 . . . 
        . . . . . 5 . 5 5 5 5 5 . . . . 
        . . . . . 5 5 . 5 . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        `],
    200,
    false
    )
    otherSprite.sayText("ahhh")
    otherSprite.destroy(effects.disintegrate, 200)
    sprite.destroy(effects.warmRadial, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bigenemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
    scene.cameraShake(5, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    info.changeLifeBy(-1)
    otherSprite.setKind(SpriteKind.completeenemy)
    scene.cameraShake(4, 500)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let projectile3: Sprite = null
let statusbar2: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 4 2 2 2 4 . . . . . . . 
    . . . 4 4 4 2 4 4 4 . . . . . . 
    . . . 4 4 . . . 4 4 . . . . . . 
    . . 4 4 4 . . . . 4 4 . . . . . 
    . . 4 . . . . . . . 4 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(35)
info.startCountdown(30)
statusbar2 = statusbars.create(15, 4, StatusBarKind.people)
statusbar2.attachToSprite(mySprite, 20, 0)
statusbar2.setColor(5, 15)
statusbar2.value = 0
if (info.score() == 50) {
    info.setScore(info.highScore())
    info.changeScoreBy(1)
}
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 9 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    projectile2 = sprites.createProjectileFromSide(img`
        ....................
        .......9999.........
        ......969999........
        ......999999........
        ......999999........
        ...777999999777.....
        .777779999997777....
        .7777799999977777...
        .7777799999977777...
        .77777999999777777..
        .77777799997777777..
        .77777777777777777..
        .77777777777777777..
        ..7777777777777777..
        ...777777777777777..
        .....77777777777....
        `, randint(-50, 50), randint(-50, 50))
    projectile2.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 9 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 9 4 . 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . 4 . 4 9 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . 4 . . 4 . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 9 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    projectile.sayText("help:(", 2000, true)
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
