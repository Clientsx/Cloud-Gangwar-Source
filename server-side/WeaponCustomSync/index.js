mp.events.add('CloudGW:CustomSync:HitPlayer', (player, targetEntity, bonedamage) => {
    if (player == null || targetEntity == null) return;
    if (targetEntity.isDead) return;
    if (targetEntity.isAduty) return;
    targetEntity.call("applyCustomDamage", [parseInt(bonedamage), `${player.position.x}`, `${player.position.y}`, `${player.position.z}`]);
    if (targetEntity.lastHitter == player) return;
    else targetEntity.assistHitter = targetEntity.lastHitter, targetEntity.lastHitter = player;
});