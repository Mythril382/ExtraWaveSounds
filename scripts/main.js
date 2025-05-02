/* I can probably make this way better. */

Events.on(WaveEvent, e => {
    let final = Vars.tree.loadSound("final");
    let imminent = Vars.tree.loadSound("imminent");
    let guardian = Vars.tree.loadSound("guardian");
    
    if(Vars.state.rules.winWave > 0 && Vars.state.wave == Vars.state.rules.winWave){
        final.play(1, 1, 0, false, false);
    }
    
    let playImminent = Vars.state.rules.spawns.contains(boolf(spawn => spawn.getSpawned(Vars.state.wave - 1) > 0 && spawn.effect == StatusEffects.boss));
    let playGuardian = Vars.state.rules.spawns.contains(boolf(spawn => spawn.getSpawned(Vars.state.wave - 2) > 0 && spawn.effect == StatusEffects.boss));
    
    if(playImminent) imminent.play(1, 1, 0, false, false);
    if(playGuardian) guardian.play(1, 1, 0, false, false);
});
