const dummyData = [
  {
    _type: 'NewsArticle',
    name: 'On Poland-Ukraine Border, the Past Is Always Present. It’s Not Always Predictive.',
    url: 'https://www.nytimes.com/2022/04/14/world/europe/poland-ukraine-holocaust-dispatch.html',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.5pzb8xyZOgp2MUM9sjs2JC&pid=News',
        width: 700,
        height: 366
      }
    },
    description: 'For a Jewish reporter with Eastern European roots, one of the hardest challenges covering the war is reconciling the horrors of the Holocaust with the Poland and Ukraine of today.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/1d6059a2-d1f1-d2d7-4261-dc7cd5cdb84b',
        name: 'Poland'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'New York Times',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.GzcmUDr41J6Qc1JEQyNTCA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T14:29:00.0000000Z',
    category: 'World'
  },



  {
    _type: 'NewsArticle',
    name: 'WaPo, Bloomberg, AP scold Biden for ‘sowing confusion’ with ‘off-the-cuff’ remark on ‘genocide’ in Ukraine',
    url: 'https://www.foxnews.com/media/washington-post-bloomberg-ap-scold-biden-sowing-confusion-genocide-russia-ukraine',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.0Ee5DXJF-t9JZIwgDBkstC&pid=News',
        width: 700,
        height: 393
      }
    },
    description: `Major outlets slammed Biden's "genocide" comments, saying they are at odds with State Department process and may provoke military escalation.`,
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/cad484f9-be75-7a78-12dd-16233f823cd7',
        name: 'Joe Biden'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/f43284b5-985a-6e57-143e-e0e5c35dee27',
        name: 'Sowing'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Fox News',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.mdH-v7wPV5psO7NVm756zg&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T14:48:00.0000000Z'
  },
  {
    _type: 'NewsArticle',
    name: 'Stranded seafarers escape Ukraine, others trapped - ILO, sources',
    url: 'https://www.msn.com/en-us/news/world/stranded-seafarers-escape-ukraine-others-trapped-ilo-sources/ar-AAWdNn6',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.Dv3d5JLZtDiAAPXv1qFV6y&pid=News',
        width: 700,
        height: 366
      }
    },
    description: 'A portion of the estimated 1,000 seafarers trapped in Ukraine have escaped, the International Labour Organization and industry officials told Reuters, voicing concern for those remaining trapped onboard ships or unaccounted for.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/9f417f89-9a37-e0d0-912e-99dccfb8982d',
        name: 'Reuters'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/c0fb2a1f-f7f3-23ba-4b18-6879bdb78a2b',
        name: 'Seafarers'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'Reuters' },
      { _type: 'Thing', name: 'Seafarers' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Reuters on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.jFXbg3L7Ce_1pS4_IOR8CA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T13:42:09.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Russia-Ukraine war latest: Moscow says warship ‘seriously damaged’ but still afloat after explosion – live',
    url: 'https://www.msn.com/en-gb/news/world/russia-ukraine-war-latest-moscow-says-warship-seriously-damaged-but-still-afloat-after-explosion-live/ar-AAWd42l',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.oKJRroAq5l6_FhSsu4A1JS&pid=News',
        width: 700,
        height: 367
      }
    },
    description: 'Russian ship Moskva defied by Ukrainian troops on Snake Island seriously damaged; Medvedev says ‘no more talk’ of nuclear-free Baltic if Nato expands',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe',
        name: 'Russia'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/6bb559e5-6af9-adf8-d8bc-7f999aba8a3a',
        name: 'Moscow'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Russia' },
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'Moscow' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'The Guardian on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.FPGiCjSpNWuR3YuGCSVHjA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T12:57:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Russia Could Hold Some Crucial Advantages in New Phase of Ukraine War',
    url: 'https://www.msn.com/en-us/news/world/russia-could-hold-some-crucial-advantages-in-new-phase-of-ukraine-war/ar-AAWe7BZ',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.k0rRG0-d8yo3D6bLEiFSzi&pid=News',
        width: 700,
        height: 471
      }
    },
    description: 'Although invading forces may benefit from shorter supply lines and more open terrain, underlying structural features of the Russian army and state may help to negate these.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe',
        name: 'Russia'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/9fcd2468-1733-b091-77f4-a494fdc84aca',
        name: 'Phase'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Russia' },
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'Phase' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Newsweek on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.uTJA7JDoTGKvff5o3jotfg&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T13:58:37.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Strains in German coalition as junior partners turn on Scholz over Ukraine',
    url: 'https://www.msn.com/en-gb/news/world/strains-in-german-coalition-as-junior-partners-turn-on-scholz-over-ukraine/ar-AAWdJ8l',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.XtaUg5f08NpeT0U50hggNi&pid=News',
        width: 700,
        height: 366
      }
    },
    description: "Frustration is growing among German Chancellor Olaf Scholz's junior coalition partners over what they say are shortcomings in his leadership on Ukraine, an internal rift that risks undermining Western unity against Russia."
    ,
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/d327207b-5560-1fae-17a8-4bc95203ea8e',
        name: 'Olaf Scholz'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/9f417f89-9a37-e0d0-912e-99dccfb8982d',
        name: 'Reuters'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Olaf Scholz' },
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'Reuters' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Reuters on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.jFXbg3L7Ce_1pS4_IOR8CA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T13:19:42.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Ukraine War Is Depleting America’s Arsenal of Democracy',
    url: 'https://www.washingtonpost.com/business/ukraine-war-is-depleting-americas-arsenal-of-democracy/2022/04/14/4d1b8896-bbfb-11ec-a92d-c763de818c21_story.html',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.emBlQzIDsxkXYvaLLIVppy&pid=News',
        width: 700,
        height: 466
      }
    },
    description: 'Yet as the war reaches a critical stage, with the Russians preparing to consolidate their grip on eastern Ukraine, the arsenal of democracy is being depleted. That could cause a fatal shortfall for Ukrainian forces in this conflict,',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/8bdb77d8-6cab-a46f-1d4d-baa45c1445f6',
        name: 'Arsenal of Democracy'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/0f6550a1-ed10-f612-7248-0b5477eb3814',
        name: 'War film'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Washington Post',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.JRpbjhQKSgfe9BXmFtAAoA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T13:16:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'IMF chief: Ukraine war and inflation threaten global economy',
    url: 'https://abcnews.go.com/Politics/wireStory/imf-chief-ukraine-war-inflation-threaten-global-economy-84079293',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.QqLA-tdyCKmxycq098qhzC&pid=News',
        width: 700,
        height: 393
      }
    },
    description: 'The head of the International Monetary Fund warned that Russia’s war against Ukraine was weakening the economic prospects for most of the world’s countries and called high inflation “a clear and prese',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/e7294369-f005-b998-8020-b10a73c80e7b',
        name: 'World economy'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/a5552eaa-74b1-b98b-292a-f7a119d31709',
        name: 'International Monetary Fund'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'ABC',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.-LMnifaGw_NvPvJr_0E9tA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T13:34:00.0000000Z'
  },
  {
    _type: 'NewsArticle',
    name: 'IMF to lower global growth forecasts due to Ukraine war and Covid',
    url: 'https://www.theguardian.com/business/2022/apr/14/imf-lower-global-growth-forecasts-ukraine-war-covid',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.xk_nmTAAPXcYa-xhJ_80IC&pid=News',
        width: 700,
        height: 367
      }
    },
    description: 'Inflation shock caused by the invasion and ongoing pandemic is ‘a crisis on top of a crisis’ says IMF chief',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/e7294369-f005-b998-8020-b10a73c80e7b',
        name: 'World economy'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/a5552eaa-74b1-b98b-292a-f7a119d31709',
        name: 'International Monetary Fund'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'World economy' },
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'International Monetary Fund' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'The Guardian',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.FLSSz2cn3Rqzpu_HVWuRvA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T12:01:00.0000000Z'
  },
  {
    _type: 'NewsArticle',
    name: 'With Russia Mired In Ukraine, Tech Bill Targeting China Gains Traction',
    url: 'https://www.newsweek.com/russia-mired-ukraine-tech-bill-targeting-china-gains-traction-1697774',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.9xBKEoaIvixfjgeKKxDTyy&pid=News',
        width: 700,
        height: 466
      }
    },
    description: '"We want to make sure that we lead in technology, not China," Democratic Congressman Ro Khanna of California told Newsweek.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/3a69a115-efe2-98a7-3323-dcc34223c844',
        name: 'Georgia Institute of Technology'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe',
        name: 'Russia'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Newsweek',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.uTJA7JDoTGKvff5o3jotfg&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T14:41:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'War in Ukraine: Latest developments',
    url: 'https://www.msn.com/en-us/news/world/war-in-ukraine-latest-developments/ar-AAWdUZ4',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.ndUOVuM0sn0ATHOx4v7gZi&pid=News',
        width: 600,
        height: 315
      }
    },
    description: `Russian flagship 'seriously damaged' - The Russian navy's Black Sea flagship is "seriously damaged" by an ammunition explosion, state media says. A Ukrainian government official claims the vessel was hit by the country's mi
ssiles.`,
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'War film' },
      { _type: 'Thing', name: 'TeenNick' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'AFP on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.FPGiCjSpNWuR3YuGCSVHjA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T13:36:39.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Russia says warship still afloat after Ukraine claims strike',
    url: 'https://www.bbc.com/news/live/world-europe-61101906?pinned_post_locator=urn:asset:f8d07523-9c77-457b-be5c-98fbcdd01de6&pinned_post_asset_id=6257d4d06b7942142fe94585&pinned_post_type=share',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.6IBEvPDT7BfPkDg_18bLlS&pid=News',
        width: 700,
        height: 393
      }
    },
    description: 'Russia says a fire on its flagship vessel in the Black Sea detonated munitions - Ukraine says it fired missiles at the Moskva',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/99eb94f7-326f-effb-36a1-32c905c5be14',
        name: 'Moskva, Tver Oblast'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/d8c12054-a38a-14f5-8f22-49ff5614aeb5',
        name: 'BBC News'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe',
        name: 'Russia'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'BBC',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.k3N4DqozNjgK376rAnFmsA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T14:31:00.0000000Z'
  },
  {
    _type: 'NewsArticle',
    name: 'Ukraine war: Coveney visits Kyiv to meet Ukrainian government',
    url: 'https://www.bbc.co.uk/news/world-europe-61105160?at_medium=RSS&at_campaign=KARANGA',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.Okufyy51q7YNyaCkhsj-sy&pid=News',
        width: 700,
        height: 393
      }
    },
    description: "Irish Foreign Minister Simon Coveney is meeting the Ukrainian government in Kyiv to discuss Ireland's continued support for the country. The talks will also focus on how Ireland can assist Ukraine in its application for EU candidate status,",
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/b26cd1bb-fc0b-7592-b3de-553d49ae87aa',
        name: 'Simon Coveney'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/79c78723-042d-4572-bc87-599fa1203134',
        name: 'Kiev'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'BBC',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.yhngt24TSWuyw3ur0Pt3WQ&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T12:20:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Some see cyberwar in Ukraine. Others see just thwarted attacks.',
    url: 'https://www.msn.com/en-us/news/politics/some-see-cyberwar-in-ukraine-others-see-just-thwarted-attacks/ar-AAWdL85',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.8GcaSpIxuTHPdxOer23hMS&pid=News',
        width: 700,
        height: 476
      }
    },
    description: 'The misperception that Russia has been restrained or ineffective in the prosecution of its cyberwar on Ukraine likely stems from … an unrealistic test of strategic value.” They go on to warn that “Russian President Vladimir Putin is most likely to double down on early cyber-successes and seek to further disrupt and undermine government,',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Ukraine' },
      { _type: 'Thing', name: 'Politics' },
      { _type: 'Thing', name: 'Cyberwarfare' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Washington Post on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.JRpbjhQKSgfe9BXmFtAAoA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T11:19:33.0000000Z',
    category: 'ScienceAndTechnology'
  },
  {
    _type: 'NewsArticle',
    name: 'Russia invades Ukraine',
    url: 'https://www.cnn.com/europe/live-news/ukraine-russia-putin-news-04-14-22/h_04c0f5a2f1c23cea7e794d8f1651cb55',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.Eq2oNmL0_NeknrQAnEThKi&pid=News',
        width: 700,
        height: 466
      }
    },
    description: 'Russian troops are pouring into Ukraine, with a large column of military vehicles seen heading in the direction of the Donbas region. Follow here for live news updates.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe',
        name: 'Russia'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'CNN',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.t0BGYosS4GKZSebCajKQGA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T10:00:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: "Ukraine war is a 'perfect storm,' threatening food, energy, and debt crises across the globe: UN report",
    url: 'https://www.msn.com/en-us/news/world/ukraine-war-is-a-perfect-storm-threatening-food-energy-and-debt-crises-across-the-globe-un-report/ar-AAWd126',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.crO8P-JeiBtXZReOZlIHIS&pid=News',
        width: 700,
        height: 393
      }
    },
    description: `Russia's invasion of Ukraine appears to have set off a "perfect storm," sparking multiple crises across the globe in the areas of food, energy, and debt, with devastating impacts for developing countries,`,
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/31270b24-ce55-9442-4e75-0add0cb57d96',
        name: 'Perfect storm'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/3661ccab-b371-f9ad-d3e7-e4d10bf7f67d',
        name: 'Food energy'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/273e0477-30ed-3993-f232-f39244306805',
        name: 'Fox News Channel'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Perfect storm' },
      { _type: 'Thing', name: 'Food energy' },
      { _type: 'Thing', name: 'Fox News Channel' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'Fox News on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.mdH-v7wPV5psO7NVm756zg&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T07:13:17.0000000Z',
    category: 'Business'
  },
  {
    _type: 'NewsArticle',
    name: "Russian warship 'severely' damaged in the Black Sea; Biden commits another $800M to Ukraine: Live updates",
    url: 'https://www.msn.com/en-us/news/world/russian-warship-severely-damaged-in-the-black-sea-biden-commits-another-24800m-to-ukraine-live-updates/ar-AAWda30',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.BOVFRqaSlgu4vIqAm1ayNy&pid=News',
        width: 700,
        height: 393
      }
    },
    description: 'Conflicting views emerged after a Russian warship in the Black Sea was "severely" damaged Wednesday, resulting in crew evacuations. Live updates.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/4fbc4c46-7472-29ce-374d-af2d0276cdab',
        name: 'Black Sea'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe',
        name: 'Russia'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      }
    ],
    mentions: [
      { _type: 'Thing', name: 'Black Sea' },
      { _type: 'Thing', name: 'Russia' },
      { _type: 'Thing', name: 'Ukraine' }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'USA Today on MSN.com',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.m1iod5ODNIyyKu23kGIllQ&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T07:50:58.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'Hiding in Plain Sight, a Soviet-Era Air Defense System Arrives in Ukraine',
    url: 'https://www.nytimes.com/2022/04/14/world/europe/ukraine-russia-arms-nato-s300-air-defense.html',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.xIwrWjhW8If9vEGKezqiWC&pid=News',
        width: 700,
        height: 366
      }
    },
    description: 'Encouraged by the United States, Slovakia “donated” a bulky but effective S-300, hoping to challenge Russian domination of the skies in the war next door.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/edb4720a-f85f-2ef3-4669-e9de895513b0',
        name: 'Slovakia'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/a39405be-be1f-1a0a-cf80-021e0d600d07',
        name: 'Union of Soviet Socialist Republics'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'New York Times',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.GzcmUDr41J6Qc1JEQyNTCA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T09:45:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: 'US faces a race against time to get massive security aid to Ukraine with fresh assault looming',
    url: 'https://www.cnn.com/2022/04/14/politics/us-aid-ukraine-race-for-time/index.html',
    image: {
      _type: 'ImageObject',
      thumbnail: {
        _type: 'ImageObject',
        contentUrl: 'https://www.bing.com/th?id=OVFT.jHG61NLaDcrdTb_roaLGbC&pid=News',
        width: 700,
        height: 393
      }
    },
    description: 'As Ukraine braced for the expected escalation of Russian attacks in the Donbas region, the US is ramping up its commitment to help -- sending an additional $800 million worth of weapons and ammunition.',
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
        name: 'Ukraine'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/d1d85ec7-1cbb-6ee9-88a8-8af94518438a',
        name: 'Time'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'CNN',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.t0BGYosS4GKZSebCajKQGA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T04:00:00.0000000Z',
    category: 'World'
  },
  {
    _type: 'NewsArticle',
    name: "2022 World Cup play-offs: Wales' final against Scotland or Ukraine set for 5 June",
    url: 'https://www.bbc.com/sport/football/61109882',
    description: "Wales' World Cup play-off final against Scotland or Ukraine has been rescheduled for Sunday, 5 June. Rob Page's side beat Austria 2-1 in their semi-final, but Scotland's game with Ukraine was postponed,",
    about: [
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/b51b24e1-6afb-d525-d360-f2eb5bf3410b',
        name: 'Wales'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/2209c459-4e68-c299-5eaa-6ae6b9ffed7e',
        name: 'BBC Sport'
      },
      {
        _type: 'Thing',
        readLink: 'https://api.cognitive.microsoft.com/api/v7/entities/a0377d96-1a18-f843-65ad-adcbc4acdc69',
        name: 'Scotland'
      }
    ],
    provider: [
      {
        _type: 'Organization',
        name: 'BBC',
        image: {
          _type: 'ImageObject',
          thumbnail: {
            _type: 'ImageObject',
            contentUrl: 'https://www.bing.com/th?id=ODF.k3N4DqozNjgK376rAnFmsA&pid=news'
          }
        }
      }
    ],
    datePublished: '2022-04-14T14:04:00.0000000Z',
    category: 'Sports'
  }
]

module.exports = dummyData;