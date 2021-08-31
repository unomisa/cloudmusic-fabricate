import { request } from 'network/request'
import { formatArtists, formatPlayCount, formatDate } from 'common/utils'

// 获取专辑内容
export function getAlbum (id, timestamp) {
  return request({
    url: '/album',
    params: {
      id,
      timestamp
    }
  })
}

export function getAlbumComment (id, limit, offset) {
  return request({
    url: '/comment/album',
    params: {
      id,
      limit,
      offset
    }
  })
}

// 专辑动态信息,如是否收藏,收藏数,评论数,分享数
export function getAlbumDynamic (id, timestamp) {
  return request({
    url: '/album/detail/dynamic',
    params: {
      id,
      timestamp
    }
  })
}

export class AlbumBasic {
  constructor (album, dynamic) {
    this.name = album.name
    this.picUrl = album.picUrl
    this.artists = formatArtists(album.artists)
    this.publishTime = formatDate(new Date(album.publishTime)).split(' ')[0]
    this.description = album.description
    this.subCount = formatPlayCount(dynamic.subCount, 10000) // 收藏数
    this.shareCount = formatPlayCount(dynamic.shareCount, 10000) // 分享数
    this.isSub = dynamic.isSub // 专辑是否收藏
  }
}