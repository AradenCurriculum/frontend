<template>
  <a-layout class="layout">
    <a-layout-header class="flex justify-between h-12 px-4 py-2">
      <div class="left-side">
        <a-space :size="4">
          <img alt="logo" width="24" src="/logo.svg" />
          <a-typography-title
            :heading="5"
            class="!m-0"
            style="font-family: 阿里妈妈东方大楷 Regular"
          >
            {{ $t('title') }}
          </a-typography-title>
        </a-space>
      </div>

      <ul class="right-side">
        <li>
          <a-button
            class="nav-btn"
            type="text"
            shape="circle"
            @click="changeLocale"
          >
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </li>

        <li>
          <a-button
            class="nav-btn"
            type="text"
            shape="circle"
            @click="changeTheme"
          >
            <template #icon>
              <icon-sun />
            </template>
          </a-button>
        </li>

        <li>
          <a-dropdown trigger="click">
            <a-avatar :size="32" :style="{ backgroundColor: '#3370ff' }">
              <!-- <img alt="avatar" /> -->
              <IconUser />
            </a-avatar>
            <template #content>
              <a-doption>
                <a-space @click="$router.push({ name: 'userinfo' })">
                  <icon-settings />
                  {{ $t('auth.userSettings') }}
                </a-space>
              </a-doption>
              <a-doption @click="() => onLogout()">
                <a-space>
                  <icon-export />
                  {{ $t('auth.logout') }}
                </a-space>
              </a-doption>
            </template>
          </a-dropdown>
        </li>
      </ul>
    </a-layout-header>

    <a-layout>
      <a-layout-sider collapsible breakpoint="xl">
        <aside-menu />
        <!-- trigger -->
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content class="layout-content">
        <router-view v-slot="{ Component, route }">
          <transition name="page" mode="out-in" appear>
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { Notification } from '@arco-design/web-vue'

import AsideMenu from '@/components/menu.vue'
import useLocale from '@/hooks/useLocale'
import useTheme from '@/hooks/useTheme'
import { useUserStore } from '@/store'
import { i18n } from '@/locale'
import { getRecvList } from '@/api/contact'

const { changeLocale } = useLocale()
const { changeTheme } = useTheme()
const { onLogout } = useUserStore()

const onFetchContactInvitation = async () => {
  const { data } = await getRecvList()
  const unSolvedCount = data.filter((v) => v.status === 'pending').length
  if (!unSolvedCount) return
  Notification.info({
    id: 'contact',
    title: i18n.global.t('notification.contact.title', {
      count: unSolvedCount
    }),
    content: i18n.global.t('notification.contact.content'),
    closable: true
  })
}

onFetchContactInvitation()
</script>

<style lang="less">
.layout {
  width: 100vw;
  height: 100vh;
}

.left-side {
  display: flex;
  align-items: center;
}

.center-side {
  flex: 1;
}

.right-side {
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding-left: 12px;
  }

  .nav-btn {
    color: rgb(var(--gray-8));
    font-size: 16px;
    border-color: rgb(var(--gray-2));
  }
}

.layout-content {
  overflow-y: scroll;
  background-color: var(--color-fill-1);
  height: calc(100vh - 48px); // height of the Header is 3rem = 48px
  padding: 16px 24px;
}
</style>
