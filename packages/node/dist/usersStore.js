"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.resetStore = resetStore;
let users = [];
let nextId = 1;
/**
 * Renvoie la liste courante des users.
 */
function getUsers() {
    return users;
}
/**
 * Crée un utilisateur avec auto-incrémentation des IDs.
 */
function createUser(name) {
    const user = { id: nextId++, name };
    users.push(user);
    return user;
}
/**
 * Réinitialise l'état du store.
 * Utile pour isoler chaque test.
 */
function resetStore() {
    users = [];
    nextId = 1;
}
