/*
 * +-------------------------------------------+
 * |                  MIITVIP                  |
 * +-------------------------------------------+
 * | Copyright (c) 2020 makeit.vip             |
 * +-------------------------------------------+
 * | Author: makeit <lirongtong@hotmail.com>   |
 * | Homepage: https://www.makeit.vip          |
 * | Github: https://github.com/lirongtong     |
 * | Date: 2020-5-28 11:15                     |
 * +-------------------------------------------+
 */
import { GetterTree } from 'vuex'
import { RootState, LayoutState } from '../types'
import { config } from '../../utils/config'
import { $storage } from '../../utils/storage'

export const getters: GetterTree<LayoutState, RootState> = {
    collapsed: (state): boolean | null => {
        let collapsed = state.collapsed
        if (collapsed === null) collapsed = $storage.get(config.caches.storages.collapsed)
        return collapsed
    }
}